
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/ui/section';
import { Breadcrumbs } from '@/components/ui/breadcrumb';
import { brands } from '@/lib/brand-data';
import { BrandCard } from '@/components/ui/brand-card';
import { ProductService } from '@/services/productService';

export const metadata = {
  title: 'All Brands',
  description: 'Discover the trusted brands we partner with to bring you the best products.',
};

export default function AllBrandsPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Brands', href: '/products/brands' },
  ];

  const brandStats = ProductService.getBrandStats();
  
  // Calculate aggregate stats
  const totalBrands = brands.length;
  const totalProducts = Object.values(brandStats).reduce((sum, stat) => sum + stat.productCount, 0);
  const totalCategories = new Set(
    Object.values(brandStats).flatMap((stat) => {
      // Get categories for products of each brand
      return [];
    })
  ).size || Object.values(brandStats).length;

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
            <div className="mb-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {brands.map(brand => {
                    const { productCount, categoryCount } = brandStats[brand.name] || { productCount: 0, categoryCount: 0 };
                    return (
                        <BrandCard key={brand.id} brand={brand} productCount={productCount} categoryCount={categoryCount} />
                    )
                })}
            </div>
        </Section>
    </main>
  );
}
