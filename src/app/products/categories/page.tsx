'use client';

import { useState, useEffect } from 'react';
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/section";
import { CategoryCard } from '@/components/ui/category-card';
import { getCategories, getCategoryStats } from "@/services/productService";
import { Category } from '@/lib/schema';

interface CategoryStats {
    [key: string]: { productCount: number; brandCount: number };
}

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoryStats, setCategoryStats] = useState<CategoryStats>({});

    useEffect(() => {
        const fetchData = async () => {
            const [categoriesData, statsData] = await Promise.all([
                getCategories(),
                getCategoryStats(),
            ]);
            setCategories(categoriesData);
            setCategoryStats(statsData);
        };
        fetchData();
    }, []);

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
                stats={[
                  { label: 'Categories', value: totalCategories },
                  { label: 'Total Products', value: totalProducts },
                  { label: 'Brands Available', value: totalBrands },
                ]}
            />
            <Section className="py-8 md:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.map(category => {
                        const stats = categoryStats[category.name] || { productCount: 0, brandCount: 0 };
                        return (
                            <CategoryCard key={category.id} category={category} productCount={stats.productCount} brandCount={stats.brandCount} />
                        )
                    })}
                </div>
            </Section>
        </main>
      );
}
