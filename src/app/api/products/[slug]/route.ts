
import { NextResponse } from 'next/server';
import { ProductService } from '@/services/productService';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const product = ProductService.getProductBySlug(slug);

  if (!product) {
    return new NextResponse('Product not found', { status: 404 });
  }

  return NextResponse.json(product);
}
