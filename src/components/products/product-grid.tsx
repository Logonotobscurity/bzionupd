import { ProductCard } from '@/components/product-card';
import { type Product } from '@/lib/schema';
import { type Brand } from '@/lib/schema';
import { type Category } from '@/lib/schema';

interface ProductGridProps {
  products: Product[];
  viewType?: 'all' | 'brand' | 'category';
  activeSlug?: string;
  allBrands?: Brand[];
  _allCategories?: Category[];
}

export const ProductGrid = ({ products, _viewType = 'all', _activeSlug, _allBrands, _allCategories }: ProductGridProps) => {
  if (products.length === 0) {
    return <p className="text-center text-muted-foreground">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 w-full">
      {products.map((product, index) => (
        <ProductCard 
            key={product.id} 
            product={product} 
            priority={index < 8}
        />
      ))}
    </div>
  );
};
