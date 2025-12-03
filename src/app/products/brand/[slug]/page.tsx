
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
        preamble="Premium Brand Collection"
        title={brand.name}
        description={brand.brand_description || `Discover the complete range of quality products from ${brand.name}. We're proud to distribute their finest offerings.`}
        imageUrl={brand.imageUrl}
        breadcrumbs={breadcrumbItems}
        stats={[
          { label: 'Quality Products', value: productCount },
          { label: 'Product Categories', value: categoryCount },
          { label: 'Customer Rating', value: 48 },
        ]}
        primaryCta={{
          text: 'Browse Products',
          href: `#products`,
        }}
      />

      {/* Products Section */}
      <Section className="py-16 bg-white" id="products">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">All {brand.name} Products</h2>
              <p className="text-lg text-slate-600">Browse our complete range of {brand.name} products across all categories</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                <span className="text-primary text-lg">{productCount}</span> products found
              </p>
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
            <div className="text-center py-20 border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-primary mb-2">No Products Yet</h3>
              <p className="text-slate-600 max-w-md mx-auto text-lg">Products from {brand.name} will be displayed here once they are available.</p>
              <Link href="/products/brands">
                <Button className="mt-6" variant="outline" size="lg">
                  Browse Other Brands
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Section>
    </main>
  );
}
