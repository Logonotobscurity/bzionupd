
import React from 'react';
import { getProductPageData } from '@/services/productService';
import { notFound } from 'next/navigation';
import ProductDetailClient from './client-page';

interface PageProps {
  params: { slug: string };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const data = await getProductPageData(params.slug);

  if (!data) {
    return notFound();
  }

  return <ProductDetailClient {...data} />;
}
