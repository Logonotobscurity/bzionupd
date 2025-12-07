'use client';
import React, { useState, useEffect } from 'react';
import { useQuoteStore } from '@/lib/quote-store';
import { Check, ShieldCheck, Factory, Share2, Truck, Star, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { findImage } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { AnimatedDiv } from '@/components/animated-div';
import { Section } from '@/components/ui/section';
import { CTASection } from '@/components/cta-section';
import { Product, Brand, Category, Company } from '@/lib/schema';

interface ProductPageData {
  product: Product;
  brand: Brand | undefined;
  category: Category | undefined;
  company: Company | undefined;
  relatedProducts: Product[];
}

export default function ProductDetailClient(data: ProductPageData) {
  const router = useRouter();
  const { addProduct, items } = useQuoteStore();
  const [shareSuccess, setShareSuccess] = useState(false);
  const [isProductAdded, setIsProductAdded] = useState(false);

  const { product, brand, company, category, relatedProducts } = data;
  const fallbackImage = findImage('fallback');

  useEffect(() => {
    const productExists = items.some(item => item.id === product.id);
    setIsProductAdded(productExists);
  }, [items, product.id]);

  const handleRequestQuote = () => {
    if (!isProductAdded) {
      addProduct(product, 1);
      setIsProductAdded(true);
    } else {
      router.push('/checkout');
    }
  };

  const handleSaveShare = async () => {
    try {
      const shareData = {
        title: product.name,
        text: `Check out ${product.name} from ${brand?.name}`,
        url: typeof window !== 'undefined' ? window.location.href : '',
      };

      if (navigator.share) {
        await navigator.share(shareData);
      } else {
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
    <div className="min-h-screen bg-white md:bg-gradient-to-b md:from-slate-50 md:via-white md:to-slate-50 pb-20">
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 items-start">
          
          <div className="md:sticky md:top-24 will-change-auto">
            <div className="rounded-xl md:rounded-3xl bg-white md:bg-gradient-to-br md:from-white md:via-slate-50 md:to-white p-3 sm:p-4 md:p-8 shadow-sm md:shadow-lg border border-slate-200/50 md:border-slate-200/80 flex items-center justify-center min-h-[250px] sm:min-h-[350px] md:min-h-[500px] relative overflow-hidden">
              <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="hidden md:block absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -ml-24 -mb-24" />
              
              <Image 
                src={product.imageUrl || fallbackImage.imageUrl} 
                alt={product.name} 
                width={400}
                height={400}
                className="max-h-[200px] sm:max-h-[300px] md:max-h-[450px] w-auto object-contain transition-transform duration-300 relative z-10" 
                priority
              />
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="mb-4 flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary uppercase tracking-wide">
                  {category?.name}
                </span>
                {product.isFeatured && (
                   <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-700 uppercase tracking-wide flex items-center gap-1">
                     <Star className="h-3 w-3 fill-current" /> Featured
                   </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                {product.name}
              </h1>
              {product.specifications?.size && (
                <p className="text-base md:text-lg text-slate-600">
                  <span className="text-slate-500">Size:</span> <span className="font-semibold text-slate-900">{product.specifications.size}</span>
                </p>
              )}
            </div>

            <div className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full hidden md:block" />

            <div className="p-4 md:p-6 rounded-2xl bg-amber-50 border-2 border-amber-200 shadow-sm">
              <div className="flex gap-3 items-start">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-bold text-amber-900 text-sm md:text-base mb-2">Estimate Price</p>
                  {product.price ? (
                    <p className="text-2xl md:text-3xl font-bold text-primary mb-3">₦{product.price.toLocaleString()}</p>
                  ) : (
                    <p className="text-lg font-semibold text-slate-600 mb-3">Contact for pricing</p>
                  )}
                  <p className="text-sm text-amber-800 leading-relaxed">
                    <span className="font-semibold">Important Note:</span> Due to market price volatility and supply chain fluctuations, prices are subject to change. For the most current and accurate pricing, please request a quote. This ensures you get the best rates based on current market conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium">
                {product.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <div className="flex flex-col items-start gap-2 p-3 md:p-4 rounded-xl md:rounded-2xl bg-green-50 border border-green-200/50">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 text-xs md:text-sm">In Stock</span>
                  <span className="text-xs text-slate-600">Ready to ship</span>
                </div>
                <div className="flex flex-col items-start gap-2 p-3 md:p-4 rounded-xl md:rounded-2xl bg-blue-50 border border-blue-200/50">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 text-xs md:text-sm">Authentic</span>
                  <span className="text-xs text-slate-600">{brand?.name} verified</span>
                </div>
                <div className="flex flex-col items-start gap-2 p-3 md:p-4 rounded-xl md:rounded-2xl bg-orange-50 border border-orange-200/50">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Truck className="h-4 w-4 md:h-5 md:w-5 text-white" />
                  </div>
                  <span className="font-semibold text-slate-900 text-xs md:text-sm">Bulk Ready</span>
                  <span className="text-xs text-slate-600">Wholesale available</span>
                </div>
              </div>
            </div>

            {company && (
              <AnimatedDiv delay={0.2} className="mt-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 border border-slate-700/50 shadow-lg">
                <div className="flex items-center gap-4">
                    {company.logo ? (
                         <Image src={company.logo} alt={company.name || ''} width={56} height={56} className="h-14 w-14 object-contain rounded-xl bg-white p-2 shadow-sm" />
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

            <AnimatedDiv delay={0.3} className="flex gap-3 pt-6 flex-col sm:flex-row">
               <Button 
                 onClick={handleRequestQuote}
                 size="lg"
                 className="flex-1 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-base font-bold text-white shadow-lg hover:shadow-2xl hover:brightness-110 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary transition-all duration-200"
               >
                 {isProductAdded ? '✓ Go to Checkout' : 'Add to Quote Request'}
               </Button>
               <Button 
                 onClick={handleSaveShare}
                 variant="outline"
                 size="lg"
                 className="flex-1 sm:flex-none rounded-xl border-2 border-slate-300 text-base font-bold text-slate-700 hover:bg-slate-100 hover:border-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary flex items-center justify-center gap-2 transition-all duration-200"
                 title={shareSuccess ? 'Copied to clipboard!' : 'Share this product'}>
                 <Share2 className="h-5 w-5" />
                 {shareSuccess ? 'Copied!' : 'Share'}
               </Button>
            </AnimatedDiv>
        </div>
      </div>

        <AnimatedDiv delay={0.4} className="mt-20 border-t-2 border-slate-200 pt-16">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Similar Items
            </h2>
            <p className="text-lg text-slate-600">More products from {brand?.name}</p>
          </div>
          
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2 md:grid-cols-3">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((relProduct) => (
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
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">{relProduct.brand}</p>
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

        <Section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CTASection
            title="Ready to Order?"
            description="Add this product to your quote and get started with BZION today. We offer competitive pricing and reliable delivery."
            ctaText="Add to Quote"
            ctaHref="/checkout"
          />
        </Section>
      </div>
    </div>
  );
}
