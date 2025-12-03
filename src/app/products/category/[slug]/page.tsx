
import { notFound } from 'next/navigation';
import { use } from 'react';
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/section";
import { categories } from "@/lib/category-data";
import { ProductService } from "@/services/productService";
import { ProductCard } from '@/components/product-card';
import { Breadcrumbs } from '@/components/ui/breadcrumb';

export default function CategoryPage(props: { params: Promise<{ slug: string }> }) {
    const params = use(props.params);
    const slug = params.slug;
    const category = categories.find(c => c.slug === slug);

    if (!category) {
        notFound();
    }

    const categoryProducts = ProductService.getProductsByCategory(slug);
    const categoryStats = ProductService.getCategoryStats();
    const { productCount, brandCount } = categoryStats[slug] || { productCount: 0, brandCount: 0 };

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Categories', href: '/products/categories' },
        { label: category.name, href: `/products/category/${slug}` },
    ];

    return (
        <main className="flex-grow">
            <PageHero 
                title={category.name}
                description={category.description || "Browse products in this category."}
                stats={[
                    { label: 'Products', value: productCount },
                    { label: 'Brands', value: brandCount },
                ]}
            />
            <Section className="py-8 md:py-12">
                <div className="mb-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
    
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {categoryProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Section>
        </main>
      );
}
