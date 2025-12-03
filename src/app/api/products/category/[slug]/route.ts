import { NextResponse } from 'next/server';
import { products } from '@/lib/data';
import { getCategories } from '@/services/categoryService';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const categories = getCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return new NextResponse('Category not found', { status: 404 });
  }

  const categoryProducts = products.filter((p) => p.category === category.name);

  return NextResponse.json(categoryProducts);
}
