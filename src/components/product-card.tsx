
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
        <Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 relative bg-white border">
            <Link href={href} className="flex flex-col h-full">
                <div className="relative aspect-square bg-gray-50 overflow-hidden p-4 flex items-center justify-center">
                    <Image 
                        src={imageUrl}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                        priority={priority}
                        quality={85}
                        onError={(e) => {
                            // Fallback if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.src = fallbackImage.imageUrl;
                        }}
                    />
                </div>
                <CardContent className="p-4 flex-grow flex flex-col">
                    <p className="text-xs text-slate-500 mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-primary mb-2 leading-tight flex-grow min-h-[40px] text-sm line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-auto">
                        {product.price && <p className="font-semibold text-primary">₦{product.price.toLocaleString()}</p>}
                    </div>
                </CardContent>
            </Link>
             <div className="p-4 pt-0">
                <AddToQuoteButton product={product} />
             </div>
        </Card>
    )
}
