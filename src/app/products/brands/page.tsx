'use client';

import { useState, useEffect } from 'react';
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/ui/section';
import { BrandCard } from '@/components/ui/brand-card';
import { getBrands, getBrandStats } from '@/services/productService';
import { Brand } from '@/lib/schema';

interface BrandStats {
  [key: string]: { productCount: number; categoryCount: number };
}

export default function AllBrandsPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [brandStats, setBrandStats] = useState<BrandStats>({});

  useEffect(() => {
    const fetchData = async () => {
      const [brandsData, brandStatsData] = await Promise.all([
        getBrands(),
        getBrandStats(),
      ]);
      setBrands(brandsData);
      setBrandStats(brandStatsData);
    };
    fetchData();
  }, []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Brands', href: '/products/brands' },
  ];
  
  const totalBrands = brands.length;
  const totalProducts = Object.values(brandStats).reduce((sum, stat) => sum + stat.productCount, 0);

  return (
    <main className="flex-grow">
        <PageHero 
            preamble="Trusted Quality Brands"
            title="Our Brands"
            description="We are proud to partner with leading brands to offer a diverse selection of high-quality products. Explore our brand partners below."
            breadcrumbs={breadcrumbItems}
            stats={[
              { label: 'Premium Brands', value: totalBrands },
              { label: 'Quality Products', value: totalProducts },
              { label: 'Categories Covered', value: 25 },
            ]}
        />
        <Section className="py-8 md:py-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {brands.map(brand => {
                    const stats = brandStats[brand.name] || { productCount: 0, categoryCount: 0 };
                    return (
                        <BrandCard key={brand.id} brand={brand} productCount={stats.productCount} categoryCount={stats.categoryCount} />
                    )
                })}
            </div>
        </Section>
    </main>
  );
}
