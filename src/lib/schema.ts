
export interface Company {
  id: number;
  name: string;
  slug: string;
  brandCount: number;
  productCount: number;
  categories: string[];
  description: string;
  logo?: string;
  isActive: boolean;
}

export type Brand = {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  isFeatured: boolean;
  brand_description?: string;
  companyId?: number;
  productCount?: number;
  categoryCount?: number;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  productCount?: number;
  brandCount?: number;
};

export type Product = {
  id: number;
  sku: string;
  name: string;
  slug: string;
  brand: string;
  brandId: number;
  company: string;
  companyId: number;
  category: string;
  categorySlug: string;
  description?: string;
  detailedDescription?: string;
  price?: number;
  moq?: number;
  unit?: string;
  inStock?: boolean;
  quantity?: number;
  images: string[];
  specifications?: {
    brand: string;
    company: string;
    unit: string;
    moq: number;
    sku: string;
    size?: string;
  };
  rating?: number;
  reviewCount?: number;
  tags?: string[];
  isActive?: boolean;
  isFeatured?: boolean;
  createdAt?: string;
  updatedAt?: string;
  imageUrl: string; // Added to satisfy other components, will be mapped
};
