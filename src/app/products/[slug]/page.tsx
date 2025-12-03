'use client';
import React, { use } from 'react';
import { ProductService } from '@/services/productService';
import { ArrowRight, Check, Package, ShieldCheck, Factory } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { findImage } from '@/lib/placeholder-images';

// Mock function to simulate Next.js Page Params
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage(props: PageProps) {
  // Unwrap params Promise
  const params = use(props.params);
  
  // 1. Fetch Data
  const data = ProductService.getProductPageData(params.slug);

  if (!data) {
    notFound();
  }

  const { product, brand, company, category, relatedProducts } = data;
  const fallbackImage = findImage('fallback');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* --- BREADCRUMBS --- */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-500">
          <ol className="flex list-none p-0">
            <li className="flex items-center">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <ArrowRight className="mx-2 h-3 w-3" />
            </li>
            <li className="flex items-center">
              <Link href={`/products/categories/${category.slug}`} className="hover:text-blue-600">{category.name}</Link>
              <ArrowRight className="mx-2 h-3 w-3" />
            </li>
            <li className="flex items-center">
              <Link href={`/products/brand/${brand.slug}`} className="hover:text-blue-600">{brand.name}</Link>
              <ArrowRight className="mx-2 h-3 w-3" />
            </li>
            <li className="font-medium text-gray-900 truncate max-w-[200px]">
              {product.name}
            </li>
          </ol>
        </nav>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* --- LEFT: PRODUCT IMAGE --- */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 flex items-center justify-center min-h-[400px]">
            <Image 
              src={product.imageUrl || fallbackImage.imageUrl} 
              alt={product.name} 
              width={400}
              height={400}
              className="max-h-[400px] w-auto object-contain transition-transform duration-500 hover:scale-105" 
            />
          </div>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                  {category.name}
                </span>
                {product.isFeatured && (
                   <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                     Featured
                   </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {product.name}
              </h1>
              {product.specifications?.size && (
                <p className="mt-2 text-lg text-gray-500">
                  Size: <span className="font-semibold text-gray-900">{product.specifications.size}</span>
                </p>
              )}
            </div>

            <hr className="border-gray-200" />

            <div className="space-y-4">
              <p className="text-base text-gray-700 leading-relaxed">
                {product.description}
              </p>
              
              {/* Features List (Static for demo) */}
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                  In Stock & Ready to Ship
                </li>
                <li className="flex items-center">
                  <ShieldCheck className="mr-2 h-4 w-4 text-green-500" />
                  Authentic {brand.name} Product
                </li>
                <li className="flex items-center">
                  <Package className="mr-2 h-4 w-4 text-green-500" />
                  Wholesale Available
                </li>
              </ul>
            </div>

            {/* --- MANUFACTURER CARD --- */}
            {company && (
              <div className="mt-6 rounded-xl bg-gray-50 p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                    {company.logo ? (
                         <Image src={company.logo} alt={company.name} width={40} height={40} className="h-10 w-10 object-contain rounded bg-white p-1" />
                    ) : (
                        <div className="h-10 w-10 bg-gray-200 rounded flex items-center justify-center">
                            <Factory className="h-5 w-5 text-gray-500"/>
                        </div>
                    )}
                  <div>
                    <p className="text-xs text-gray-500">Manufactured by</p>
                    <p className="text-sm font-semibold text-gray-900">{company.name}</p>
                  </div>
                </div>
              </div>
            )}

            {/* --- ACTION BUTTONS --- */}
            <div className="flex gap-4 pt-4">
               <button className="flex-1 rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold shadow hover:bg-blue-700 transition-colors">
                 Contact for Price
               </button>
               <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50">
                 Save
               </button>
            </div>
          </div>
        </div>

        {/* --- RELATED PRODUCTS SECTION --- */}
        <div className="mt-20 border-t border-gray-200 pt-10">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Similar Items in {category.name}
          </h2>
          
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((relProduct) => (
                <Link 
                  key={relProduct.id} 
                  href={`/products/${relProduct.slug}`}
                  className="group block overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="aspect-square w-full overflow-hidden bg-gray-50 p-4 flex items-center justify-center">
                    <Image
                      src={relProduct.imageUrl || fallbackImage.imageUrl}
                      alt={relProduct.name}
                      width={200}
                      height={200}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{brand.name}</p>
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                      {relProduct.name}
                    </h3>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-500 col-span-full">No related products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
