
'use client';

import Image from 'next/image';
import { type Product } from '@/lib/schema';
import Link from 'next/link';
import { AddToQuoteButton } from './add-to-quote-button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { findImage } from '@/lib/placeholder-images';
import { Star, Zap } from 'lucide-react';

interface ProductCardProps {
    product: Product;
    priority?: boolean;
    variant?: 'default' | 'compact' | 'featured';
}

// Extracted styles for reusability
const cardStyles = {
    container: "group h-full flex flex-col overflow-hidden rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 relative bg-white border border-slate-200/50 will-change-transform",
    imageContainer: "relative bg-gradient-to-br from-slate-50 via-slate-50 to-slate-100 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:from-slate-100 group-hover:to-slate-200",
    imageWrapper: "relative w-full h-full flex items-center justify-center",
    image: "object-contain transition-transform duration-500 group-hover:scale-110",
    contentWrapper: "flex-grow flex flex-col gap-2.5 p-3 sm:p-4 md:p-3.5",
    brand: "text-xs font-semibold text-secondary/80 uppercase tracking-widest truncate",
    title: "font-bold text-primary text-sm sm:text-base leading-snug line-clamp-2 break-words group-hover:text-primary/90 transition-colors duration-200",
    description: "text-xs text-slate-500 line-clamp-1 mt-0.5",
    badgeContainer: "flex gap-1.5 flex-wrap mt-2",
    badge: "inline-flex items-center gap-1",
    buttonWrapper: "px-3 sm:px-4 pb-3 sm:pb-4 pt-2 transition-opacity duration-200 group-hover:opacity-100",
    overlayGradient: "absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
};

const variantStyles = {
    default: {
        imageContainerHeight: "h-[160px] sm:h-[200px] md:h-[220px]",
    },
    compact: {
        imageContainerHeight: "h-[120px] sm:h-[140px] md:h-[160px]",
    },
    featured: {
        imageContainerHeight: "h-[240px] sm:h-[280px] md:h-[320px]",
    }
};

export const ProductCard = ({ 
    product, 
    priority = false,
    variant = 'default'
}: ProductCardProps) => {
    const href = product.slug ? `/products/${product.slug}` : '#';
    const fallbackImage = findImage('fallback');
    const currentVariant = variantStyles[variant];
    
    // Get image URL
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
    const isFeatured = product.isFeatured;
    const isNew = product.createdAt && new Date(product.createdAt).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000;

    return (
        <Link 
            href={href} 
            className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl sm:rounded-2xl transition-all"
            aria-label={`View ${product.name} by ${product.company}`}
        >
            <Card className={cardStyles.container}>
                
                {/* Image Container */}
                <div className={`${cardStyles.imageContainer} ${currentVariant.imageContainerHeight}`}>
                    <div className={cardStyles.imageWrapper}>
                        <Image 
                            src={imageUrl}
                            alt={product.name}
                            fill
                            className={cardStyles.image}
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            priority={priority}
                            quality={80}
                            loading={priority ? 'eager' : 'lazy'}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = fallbackImage.imageUrl;
                            }}
                        />
                    </div>
                    <div className={cardStyles.overlayGradient} />
                    
                    {/* Status Badges */}
                    {(isFeatured || isNew) && (
                        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 z-10">
                            {isFeatured && (
                                <Badge className={`${cardStyles.badge} bg-amber-50 text-amber-700 border border-amber-200 rounded-full shadow-sm hover:shadow-md transition-shadow`}>
                                    <Star className="h-3 w-3 fill-amber-700" /> 
                                    <span className="text-xs font-semibold">Featured</span>
                                </Badge>
                            )}
                            {isNew && (
                                <Badge className={`${cardStyles.badge} bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full shadow-sm hover:shadow-md transition-shadow`}>
                                    <Zap className="h-3 w-3 fill-emerald-700" />
                                    <span className="text-xs font-semibold">New</span>
                                </Badge>
                            )}
                        </div>
                    )}
                </div>
                
                {/* Content */}
                <div className={cardStyles.contentWrapper}>
                    <div>
                        <p className={cardStyles.brand}>{product.company}</p>
                        <h3 className={cardStyles.title}>{product.name}</h3>
                    </div>
                    
                    {/* Category Badge */}
                    {product.category && (
                        <div className={cardStyles.badgeContainer}>
                            <Badge variant="outline" className="text-xs rounded-full border-slate-300 text-slate-600 bg-slate-50/50 hover:bg-slate-100 transition-colors">
                                {product.category}
                            </Badge>
                        </div>
                    )}
                </div>
                
                {/* Button */}
                <div className={cardStyles.buttonWrapper}>
                    <AddToQuoteButton product={product} />
                </div>
            </Card>
        </Link>
    );
}
