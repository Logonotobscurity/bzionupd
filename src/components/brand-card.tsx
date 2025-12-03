
import Link from 'next/link';
import Image from 'next/image';
import { type Brand } from '@/lib/schema';

export const BrandCard = ({ brand }: { brand: Brand }) => {
  return (
    <Link href={`/products/brand/${brand.slug}`} className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
        <Image
          src={brand.imageUrl || '/images/placeholder.jpg'}
          alt={`${brand.name} logo`}
          fill
          className="object-contain p-3"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          quality={85}
          priority={false}
          onError={(e) => {
            // Fallback if image fails to load
            const target = e.target as HTMLImageElement;
            if (target.src !== '/images/placeholder.jpg') {
              target.src = '/images/placeholder.jpg';
            }
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-primary mb-1 line-clamp-2">{brand.name}</h3>
        {brand.brand_description && <p className="text-slate-600 text-xs line-clamp-2">{brand.brand_description}</p>}
      </div>
    </Link>
  );
};
