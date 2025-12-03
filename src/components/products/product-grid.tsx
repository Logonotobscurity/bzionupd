import { ProductCard } from '@/components/product-card';
import { type Product } from '@/lib/data';
import { type Brand } from '@/lib/schema';
import { type Category } from '@/lib/schema';

interface ProductGridProps {
  products: Product[];
  viewType?: 'all' | 'brand' | 'category';
  activeSlug?: string;
  allBrands?: Brand[];
  allCategories?: Category[];
}

export const ProductGrid = ({ products, viewType = 'all', activeSlug, allBrands, allCategories }: ProductGridProps) => {
  if (products.length === 0) {
    return <p className="text-center text-muted-foreground">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
      {products.map((product, index) => (
        <ProductCard 
            key={product.id} 
            product={product} 
            priority={index < 8}
            viewType={viewType}
            activeSlug={activeSlug}
            allBrands={allBrands}
            allCategories={allCategories}
        />
      ))}
    </div>
  );
};
