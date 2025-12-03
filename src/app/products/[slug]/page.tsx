'use client';
import React, { use, useState, useEffect } from 'react';
import { ProductService } from '@/services/productService';
import { useQuoteStore } from '@/lib/quote-store';
import { ArrowRight, Check, Package, ShieldCheck, Factory, Share2, Truck, Star } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { findImage } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { AnimatedDiv } from '@/components/animated-div';

// Mock function to simulate Next.js Page Params
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage(props: PageProps) {
  // Unwrap params Promise
  const params = use(props.params);
  const router = useRouter();
  const { addProduct, items } = useQuoteStore();
  const [shareSuccess, setShareSuccess] = useState(false);
  const [isProductAdded, setIsProductAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // 1. Fetch Data
  const data = ProductService.getProductPageData(params.slug);

  if (!data) {
    notFound();
  }

  const { product, brand, company, category, relatedProducts } = data;
  const fallbackImage = findImage('fallback');

  // Check if product is already in quote
  useEffect(() => {
    const productExists = items.some(item => item.id === product.id);
    setIsProductAdded(productExists);
  }, [items, product.id]);

  const handleRequestQuote = () => {
    if (!isProductAdded) {
      // Add product to quote with quantity 1
      addProduct(product, 1);
      setIsProductAdded(true);
    } else {
      // Already added, navigate to checkout
      router.push('/checkout');
    }
  };

  const handleSaveShare = async () => {
    try {
      const shareData = {
        title: product.name,
        text: `Check out ${product.name} from ${brand.name}`,
        url: typeof window !== 'undefined' ? window.location.href : '',
      };

      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        const text = `${product.name}\n${shareData.text}\n${shareData.url}`;
        await navigator.clipboard.writeText(text);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 2000);
      }
    } catch (error) {
      console.error('Share failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 pb-20">
      
      {/* --- BREADCRUMBS --- */}
      <div className="container mx-auto px-4 py-6 hidden md:block border-b border-slate-200/50">
        <nav className="text-sm text-slate-600">
          <ol className="flex list-none p-0 items-center gap-2">
            <li className="flex items-center">
              <Link href="/" className="text-primary hover:text-primary/80 font-medium transition">Home</Link>
              <ArrowRight className="mx-2 h-3 w-3 text-slate-300" />
            </li>
            <li className="flex items-center">
              <Link href={`/products/category/${category.slug}`} className="text-primary hover:text-primary/80 font-medium transition">{category.name}</Link>
              <ArrowRight className="mx-2 h-3 w-3 text-slate-300" />
            </li>
            <li className="flex items-center">
              <Link href={`/products/brand/${brand.slug}`} className="text-primary hover:text-primary/80 font-medium transition">{brand.name}</Link>
              <ArrowRight className="mx-2 h-3 w-3 text-slate-300" />
            </li>
            <li className="font-semibold text-slate-900 truncate max-w-[200px]">
              {product.name}
            </li>
          </ol>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          
          {/* --- LEFT: PRODUCT IMAGE --- */}
          <AnimatedDiv className="sticky top-24">
            <div className="rounded-3xl bg-gradient-to-br from-white via-slate-50 to-white p-8 shadow-lg border border-slate-200/80 flex items-center justify-center min-h-[500px] relative overflow-hidden group">
              {/* Background gradient orbs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -ml-24 -mb-24" />
              
              <Image 
                src={product.imageUrl || fallbackImage.imageUrl} 
                alt={product.name} 
                width={400}
                height={400}
                className="max-h-[450px] w-auto object-contain transition-all duration-500 group-hover:scale-110 relative z-10" 
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </AnimatedDiv>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <AnimatedDiv delay={0.1} className="space-y-8">
            <div>
              <div className="mb-4 flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary uppercase tracking-wide">
                  {category.name}
                </span>
                {product.isFeatured && (
                   <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-700 uppercase tracking-wide flex items-center gap-1">
                     <Star className="h-3 w-3 fill-current" /> Featured
                   </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                {product.name}
              </h1>
              {product.specifications?.size && (
                <p className="text-lg text-slate-600">
                  <span className="text-slate-500">Size:</span> <span className="font-semibold text-slate-900">{product.specifications.size}</span>
                </p>
              )}
            </div>

            <div className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />

            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {product.description}
              </p>
              
              {/* Features List with Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-start gap-2 p-4 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/50">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 text-sm">In Stock</span>
                  <span className="text-xs text-slate-600">Ready to ship</span>
                </div>
                <div className="flex flex-col items-start gap-2 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/50">
                  <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 text-sm">Authentic</span>
                  <span className="text-xs text-slate-600">{brand.name} verified</span>
                </div>
                <div className="flex flex-col items-start gap-2 p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200/50">
                  <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 text-sm">Bulk Ready</span>
                  <span className="text-xs text-slate-600">Wholesale available</span>
                </div>
              </div>
            </div>

            {/* --- MANUFACTURER CARD --- */}
            {company && (
              <AnimatedDiv delay={0.2} className="mt-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 border border-slate-700/50 shadow-lg">
                <div className="flex items-center gap-4">
                    {company.logo ? (
                         <Image src={company.logo} alt={company.name} width={56} height={56} className="h-14 w-14 object-contain rounded-xl bg-white p-2 shadow-sm" />
                    ) : (
                        <div className="h-14 w-14 bg-slate-700 rounded-xl flex items-center justify-center">
                            <Factory className="h-7 w-7 text-slate-400"/>
                        </div>
                    )}
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Manufactured by</p>
                    <p className="text-lg font-bold text-white">{company.name}</p>
                  </div>
                </div>
              </AnimatedDiv>
            )}

            {/* --- ACTION BUTTONS --- */}
            <AnimatedDiv delay={0.3} className="flex gap-3 pt-6 flex-col sm:flex-row">
               <Button 
                 onClick={handleRequestQuote}
                 className="flex-1 rounded-xl bg-gradient-to-r from-primary to-primary/90 px-8 py-3 text-base font-bold text-white shadow-lg hover:shadow-2xl hover:brightness-110 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition-all duration-200 min-h-12"
               >
                 {isProductAdded ? '✓ Go to Checkout' : 'Add to Quote Request'}
               </Button>
               <Button 
                 onClick={handleSaveShare}
                 variant="outline"
                 className="flex-1 sm:flex-none rounded-xl border-2 border-slate-300 px-6 py-3 text-base font-bold text-slate-700 hover:bg-slate-100 hover:border-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary min-h-12 flex items-center justify-center gap-2 transition-all duration-200"
                 title={shareSuccess ? 'Copied to clipboard!' : 'Share this product'}>
                 <Share2 className="h-5 w-5" />
                 {shareSuccess ? 'Copied!' : 'Share'}
               </Button>
            </AnimatedDiv>
          </AnimatedDiv>
        </div>

        {/* --- RELATED PRODUCTS SECTION --- */}
        <AnimatedDiv delay={0.4} className="mt-20 border-t-2 border-slate-200 pt-16">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              Similar Items
            </h2>
            <p className="text-lg text-slate-600">More products from {category.name}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((relProduct, index) => (
                <Link 
                  key={relProduct.id} 
                  href={`/products/${relProduct.slug}`}
                  className="group block overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:border-primary hover:-translate-y-1"
                >
                  <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-4 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/5 group-hover:from-primary/5 group-hover:to-secondary/10 transition-all duration-300" />
                    <Image
                      src={relProduct.imageUrl || fallbackImage.imageUrl}
                      alt={relProduct.name}
                      width={200}
                      height={200}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-110 relative z-10"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">{brand.name}</p>
                    <h3 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors">
                      {relProduct.name}
                    </h3>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-slate-600 col-span-full text-center py-8">No related products found.</p>
            )}
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
}
