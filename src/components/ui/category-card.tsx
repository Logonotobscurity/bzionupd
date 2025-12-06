import Link from 'next/link';
import Image from 'next/image';
import { type Category } from '@/lib/schema';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CategoryCardProps {
  category: Category;
  productCount: number;
  brandCount: number;
}

export const CategoryCard = ({ category, productCount, brandCount }: CategoryCardProps) => {
  const imageUrl = category.imageUrl || `https://picsum.photos/seed/${category.slug}/400/400`;

  return (
    <Link href={`/products/category/${category.slug}`} className="group block h-full">
        <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 bg-white border-slate-200 hover:border-primary h-full flex flex-col">
            <CardHeader className="p-0 flex-grow flex">
                 <div className="relative aspect-square w-full">
                    <Image
                        src={imageUrl}
                        alt={`Image for ${category.name}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        data-ai-hint="product category"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
            </CardHeader>
            <CardContent className="p-2 sm:p-3 md:p-4">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="font-medium text-xs sm:text-sm text-slate-800 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {category.name}
                    </h3>
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary flex-shrink-0" />
                </div>
                <p className="text-xs text-slate-500 mt-0.5 sm:mt-1 line-clamp-1">{productCount} products</p>
            </CardContent>
        </Card>
    </Link>
  );
};
