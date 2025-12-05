
import { NextResponse } from 'next/server';
import { ProductService } from '@/services/productService';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = ProductService.getProductBySlug(slug);

  if (!product) {
    return new NextResponse('Product not found', { status: 404 });
  }

  return NextResponse.json(product);
}
