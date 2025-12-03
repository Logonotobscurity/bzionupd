
import { type Product, type Brand, type Category, type Company } from '@/lib/schema';
import { products } from '@/lib/all-products-data'; 
import { brands } from '@/lib/brand-data';     
import { categories } from '@/lib/category-data';
import { companies } from '@/lib/company-data';
import { getCompanyBySlug } from './company-data';
import { normalizeProducts } from './product-utils';

// --- Extended Interface for PDP ---
export interface PDPContext {
  product: Product;
  brand: Brand;
  company?: Company;
  category: Category;
  relatedProducts: Product[];
}

// Export products for use in API routes
export { products };

// Get products by company slug
export function getProductsByCompanySlug(slug: string): Product[] {
  const company = getCompanyBySlug(slug);
  if (!company) {
    return [];
  }
  const companyProducts = products.filter(product => product.companyId === company.id);
  return normalizeProducts(companyProducts);
}

