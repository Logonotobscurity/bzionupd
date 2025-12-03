
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

    return (
        <main className="flex-grow">
            <PageHero 
                title="Product Categories"
                description="Browse our products by category to find exactly what you need."
            />
            <Section className="py-8 md:py-12">
                <div className="mb-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
    
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
