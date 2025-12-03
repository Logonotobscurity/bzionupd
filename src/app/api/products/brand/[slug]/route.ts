import { NextResponse } from 'next/server';
import { products } from '@/lib/data';
import { getBrands } from '@/services/brandService';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const allBrands = await getBrands();
  const brand = allBrands.find((b) => b.slug === slug);

  if (!brand) {
    return new NextResponse('Brand not found', { status: 404 });
  }

  const brandProducts = products.filter((p) => p.brand === brand.name);

  return NextResponse.json(brandProducts);
}
