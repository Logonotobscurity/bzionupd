
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface Brand {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
}

interface BrandCardProps {
  brand: Brand;
  productCount: number;
  categoryCount: number;
}

export function BrandCard({ brand, productCount, categoryCount }: BrandCardProps) {
  return (
    <Link href={`/products/brand/${brand.slug}`}>
        <Card className="group block overflow-hidden rounded-lg border border-slate-200 hover:border-primary transition-colors duration-200">
            <div className="relative h-28 bg-white group-hover:bg-primary/5">
                <Image 
                    src={brand.imageUrl || '/images/placeholder.jpg'} 
                    alt={`${brand.name} logo`} 
                    fill 
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 15vw"
                />
            </div>
            <div className="p-3 border-t bg-slate-50/70 group-hover:bg-primary/5">
                <h3 className="text-sm font-semibold text-slate-800 text-center">{brand.name}</h3>
                <div className="text-xs text-slate-500 text-center mt-1">
                    {productCount} products in {categoryCount} categories
                </div>
            </div>
        </Card>
    </Link>
  );
}
