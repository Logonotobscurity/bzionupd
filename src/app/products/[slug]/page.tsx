
import React from 'react';
import { getProductPageData, getBestSellers, getCategories } from '@/services/productService';
import { notFound } from 'next/navigation';
import ProductDetailClient from './client-page';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getProductPageData(slug);
  const [products, categories] = await Promise.all([
    getBestSellers(),
    getCategories(),
  ]);

  if (!data) {
    return notFound();
  }

  return <ProductDetailClient {...data} bestSellers={products} bestSellersCategories={categories} />;
}
