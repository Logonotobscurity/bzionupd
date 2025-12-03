
'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState, use } from 'react';
import { getCompanyBySlug } from '@/lib/company-data';
import { getProductsByCompanySlug } from '@/lib/data';
import { getBrandsByCompanyId } from '@/services/brandService';
import { Section, SectionHeading, SectionTitle, SectionDescription } from '@/components/ui/section';
import { Breadcrumbs } from '@/components/ui/breadcrumb';
import { ProductGrid } from '@/components/product-grid';
import { BrandGrid } from '@/components/brand-grid';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { GsapScrollTrigger } from '@/components/ui/GsapScrollTrigger';
import { PageHero } from '@/components/layout/PageHero';
import type { Brand } from '@/lib/schema';

interface CompanyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CompanyPage(props: CompanyPageProps) {
  const params = use(props.params);
  const slug = params.slug;
  
  const [companyBrands, setCompanyBrands] = useState<Brand[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const company = getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brands = await getBrandsByCompanyId(company.id);
        setCompanyBrands(brands.slice(0, 4));
      } catch (error) {
        console.error('Failed to fetch brands:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrands();
  }, [company.id]);

  const companyProducts = getProductsByCompanySlug(slug).slice(0, 4);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Partners', href: '/companies' },
    { label: company.name, href: `/companies/${company.slug}` },
  ];

  return (
    <main className="flex-grow">
      <PageHero
        preamble="Distribution Partner"
        title={company.name}
        description={company.description}
        imageUrl={company.logo}
        breadcrumbs={breadcrumbItems}
        stats={[
          { label: 'Brands Distributed', value: company.brandCount },
          { label: 'Total Products', value: company.productCount },
          { label: 'Product Categories', value: company.categories.length },
        ]}
        primaryCta={{
          text: 'View All Products',
          href: '/products',
        }}
        secondaryCta={{
          text: 'Contact Partner',
          href: '/contact',
        }}
      />

      <Section id="company-brands" className="py-16 bg-slate-50/50">
        <GsapScrollTrigger>
          <SectionHeading className="text-center mb-12">
            <SectionTitle>Brands from {company.name}</SectionTitle>
            <SectionDescription>Explore the trusted brands we represent from {company.name}.</SectionDescription>
          </SectionHeading>
        </GsapScrollTrigger>
        <BrandGrid brands={companyBrands} isLoading={isLoading} columns={4} />
        <div className="text-center mt-12">
            <Link href="/brands" passHref>
                <Button size="lg" variant="outline">View All Brands</Button>
            </Link>
        </div>
      </Section>

      <Section id="company-products" className="py-16">
        <GsapScrollTrigger>
          <SectionHeading className="text-center mb-12">
            <SectionTitle>Featured Products</SectionTitle>
            <SectionDescription>Discover the quality products we distribute from {company.name}.</SectionDescription>
          </SectionHeading>
        </GsapScrollTrigger>
        <ProductGrid products={companyProducts} columns={4} />
        <div className="text-center mt-12">
            <Link href="/products" passHref>
                <Button size="lg">View All Products</Button>
            </Link>
        </div>
      </Section>
    </main>
  );
}
