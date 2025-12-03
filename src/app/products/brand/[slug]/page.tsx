
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/section';
import { Breadcrumbs } from '@/components/ui/breadcrumb';
import { ProductCard } from '@/components/product-card';
import { ProductService } from '@/services/productService';
import { brands } from '@/lib/brand-data';
import Image from 'next/image';
import { ProductSortOptions } from '@/components/product-sort-options';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PageHero } from '@/components/layout/PageHero';

interface BrandPageProps {
  params: {
    slug: string;
  };
}

async function getBrandBySlug(slug: string) {
  return brands.find(b => b.slug === slug);
}

export default async function BrandPage({ params: { slug } }: BrandPageProps) {
  const brand = await getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  const brandProducts = ProductService.getProductsByBrand(slug);
  const brandStats = ProductService.getBrandStats();
  const { productCount, categoryCount } = brandStats[brand.name] || { productCount: 0, categoryCount: 0 };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Brands', href: '/products/brands' },
    { label: brand.name, href: `/products/brand/${brand.slug}` },
  ];

  return (
    <main className="flex-grow">
      <PageHero 
        title={brand.name}
        description={brand.brand_description || `Browse products from ${brand.name}`}
        imageUrl={brand.imageUrl}
        stats={[
          { label: 'Products', value: productCount },
          { label: 'Categories', value: categoryCount },
        ]}
      />

      {/* Products Section */}
      <Section className="py-12 bg-slate-50/70">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-4 border-b pb-4">
              <h2 className="text-2xl font-semibold text-slate-800">Products from {brand.name}</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-slate-600 whitespace-nowrap">{productCount} products found</p>
                <ProductSortOptions />
              </div>
          </div>
          
          {brandProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {brandProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border-2 border-dashed rounded-lg bg-white">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-primary mb-2">No Products Yet</h3>
              <p className="text-slate-500 max-w-md mx-auto">Products from {brand.name} will be displayed here once they are available.</p>
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}
