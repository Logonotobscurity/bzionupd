
import { notFound } from 'next/navigation';
import { use } from 'react';
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/section";
import { categories } from "@/lib/category-data";
import { ProductService } from "@/services/productService";
import { ProductCard } from '@/components/product-card';
import { Breadcrumbs } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ProductSortOptions } from '@/components/product-sort-options';

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
                preamble="Shop by Category"
                title={category.name}
                description={category.description || "Browse our complete selection of high-quality products in this category. Find exactly what your business needs."}
                breadcrumbs={breadcrumbItems}
                stats={[
                    { label: 'Products Available', value: productCount },
                    { label: 'Trusted Brands', value: brandCount },
                    { label: 'Quality Assured', value: 100 },
                ]}
                primaryCta={{
                    text: 'View Products',
                    href: '#products',
                }}
            />

            <Section className="py-16 bg-white" id="products">
                <div className="container mx-auto px-4">
                    <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">All {category.name} Products</h2>
                            <p className="text-lg text-slate-600">Browse our complete range of {category.name.toLowerCase()} products across trusted brands</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-sm font-semibold text-slate-700 whitespace-nowrap">
                                <span className="text-primary text-lg">{productCount}</span> products found
                            </p>
                            <ProductSortOptions />
                        </div>
                    </div>

                    {categoryProducts.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
                            {categoryProducts.map((product, index) => (
                                <ProductCard key={product.id} product={product} priority={index < 8} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50">
                            <div className="text-6xl mb-4">📂</div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2">No Products Yet</h3>
                            <p className="text-slate-600 max-w-md mx-auto text-lg">Products in the {category.name} category will be displayed here once they are available.</p>
                            <Link href="/products/categories">
                                <Button className="mt-6" variant="outline" size="lg">
                                    Browse Other Categories
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </Section>
        </main>
      );
}
