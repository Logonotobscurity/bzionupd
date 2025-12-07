import { categories } from '@/lib/category-data';
import { Category } from '@/lib/schema';

export const findBySlug = async (slug: string): Promise<Category | undefined> => {
  return categories.find((c) => c.slug === slug);
};

export const findById = async (id: number): Promise<Category | undefined> => {
    return categories.find((c) => c.id === id);
    };

export const all = async (): Promise<Category[]> => {
  return categories;
};
