
'use client';

import Image from 'next/image';
import { type Product } from '@/lib/schema';
import Link from 'next/link';
import { AddToQuoteButton } from './add-to-quote-button';
import { Card, CardContent } from './ui/card';
import { findImage } from '@/lib/placeholder-images';

interface ProductCardProps {
    product: Product;
    priority?: boolean;
}

export const ProductCard = ({ product, priority = false }: ProductCardProps) => {
    const href = product.slug ? `/products/${product.slug}` : '#';
    const fallbackImage = findImage('fallback');
    
    // Get image URL from imageUrl field or first image in images array or fallback
    const getProductImage = () => {
        if (product.imageUrl && product.imageUrl !== '/images/placeholder.jpg') {
            return product.imageUrl;
        }
        if (Array.isArray(product.images) && product.images.length > 0) {
            return product.images[0];
        }
        return fallbackImage.imageUrl;
    };
    
    const imageUrl = getProductImage();

    return (
        <Card className="group h-full flex flex-col overflow-hidden transition-shadow duration-300 shadow-sm hover:shadow-md hover:shadow-slate-200 relative bg-white border border-slate-200/50 will-change-transform">
            <Link href={href} className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
                <div className="relative aspect-square bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden p-3 sm:p-4 flex items-center justify-center will-change-contents">
                    <Image 
                        src={imageUrl}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority={priority}
                        quality={80}
                        loading={priority ? 'eager' : 'lazy'}
                        onError={(e) => {
                            // Fallback if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = fallbackImage.imageUrl;
                        }}
                    />
                </div>
                <CardContent className="p-3 sm:p-4 flex-grow flex flex-col gap-2">
                    <p className="text-xs text-slate-500 truncate">{product.brand}</p>
                    <h3 className="font-semibold text-primary text-xs sm:text-sm leading-tight flex-grow line-clamp-2 break-words">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-auto pt-2">
                        {product.price && <p className="font-bold text-primary text-sm">₦{product.price.toLocaleString()}</p>}
                    </div>
                </CardContent>
            </Link>
             <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-0">
                <AddToQuoteButton product={product} />
             </div>
        </Card>
    )
}
