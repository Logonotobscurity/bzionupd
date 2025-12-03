
'use client';
import React, { useState, useEffect } from 'react';
import { Section, SectionHeading, SectionPreamble, SectionTitle, SectionDescription } from '@/components/ui/section';
import { getCategories } from '@/services/categoryService';
import { CategoryCard } from '@/components/ui/category-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { type Category } from '@/lib/schema';

export function ShopByCategorySection() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            setIsLoading(true);
            const fetchedCategories = getCategories();
            setCategories(fetchedCategories);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <Section className="bg-primary">
                <div className="text-center text-slate-400">Loading categories...</div>
            </Section>
        )
    }

    return (
        <Section className="bg-primary text-white">
            <SectionHeading>
                <SectionPreamble className="text-accent" />
                <SectionTitle className="!text-white text-3xl sm:text-4xl">View In-Store Products</SectionTitle>
                <SectionDescription className="text-slate-300 text-lg sm:text-xl">
                    Ensure your business has reliable access to trusted, high-quality products. Explore our essential foodstuff and ingredients for all types of operations.
                </SectionDescription>
            </SectionHeading>
            <div className="mt-12">
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden">
                    {categories.slice(0, 6).map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
             <div className="mt-12 text-center">
                <Button asChild variant="secondary" size="lg">
                    <Link href="/products/categories">
                        View All Categories <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </Section>
    );
}
