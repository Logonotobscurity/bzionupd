import { type Product, type Brand, type Category, type Company } from '@/lib/schema';

// --- Extended Interface for PDP ---
export interface PDPContext {
  product: Product;
  brand: Brand;
  company?: Company;
  category: Category;
  relatedProducts: Product[];
}
