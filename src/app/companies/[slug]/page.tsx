
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
      <GsapScrollTrigger>
        <Section className="bg-gray-50">
          <div className="container mx-auto py-12 px-4">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 items-center">
              <div className="w-48 h-48 relative mx-auto md:mx-0">
                <Image
                  src={company.logo || '/images/placeholder.jpg'}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="md:col-span-2 text-center md:text-left">
                <h1 className="text-5xl font-extrabold text-primary tracking-tight">{company.name}</h1>
                <p className="mt-4 text-xl text-slate-600">{company.description}</p>
              </div>
            </div>
          </div>
        </Section>
      </GsapScrollTrigger>

      <Section id="company-brands" className="py-16">
        <GsapScrollTrigger>
          <SectionHeading className="text-center">
            <SectionTitle>Our Brands</SectionTitle>
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

      <Section id="company-products" className="py-16 bg-slate-50">
        <GsapScrollTrigger>
          <SectionHeading className="text-center">
            <SectionTitle>Our Products</SectionTitle>
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
