
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/section";
import { categories } from "@/lib/category-data";
import { CategoryCard } from '@/components/ui/category-card';
import { Breadcrumbs } from '@/components/ui/breadcrumb';
import { ProductService } from "@/services/productService";

export default function CategoriesPage() {

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Categories', href: '/products/categories' },
    ];

    const categoryStats = ProductService.getCategoryStats();
    
    // Calculate aggregate stats
    const totalCategories = categories.length;
    const totalProducts = Object.values(categoryStats).reduce((sum, stat) => sum + stat.productCount, 0);
    const totalBrands = Object.values(categoryStats).reduce((sum, stat) => sum + stat.brandCount, 0);

    return (
        <main className="flex-grow">
            <PageHero 
                preamble="Shop by Category"
                title="Product Categories"
                description="Browse our extensive range of products organized by category. Find exactly what you need with our comprehensive selection of food and beverage products."
                breadcrumbs={breadcrumbItems}
                stats={[
                  { label: 'Categories', value: totalCategories },
                  { label: 'Total Products', value: totalProducts },
                  { label: 'Brands Available', value: totalBrands },
                ]}
            />
            <Section className="py-8 md:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.map(category => {
                        const { productCount, brandCount } = categoryStats[category.slug] || { productCount: 0, brandCount: 0 };
                        return (
                            <CategoryCard key={category.id} category={category} productCount={productCount} brandCount={brandCount} />
                        )
                    })}
                </div>
            </Section>
        </main>
      );
}
