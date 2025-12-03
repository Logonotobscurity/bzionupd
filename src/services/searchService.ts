import { ProductService } from './productService';
import { type Product } from '@/lib/schema';

export interface SearchResult {
  id: number;
  name: string;
  slug: string;
  brand: string;
  category: string;
  price: number;
  imageUrl: string;
  excerpt: string;
}

export class SearchService {
  private static products = ProductService.getAllProducts();

  /**
   * Search products by query string
   * Searches in name, brand, category, and description
   */
  static searchProducts(query: string, minChars: number = 3): SearchResult[] {
    if (query.length < minChars) {
      return [];
    }

    const lowerQuery = query.toLowerCase().trim();

    return this.products
      .filter((product) => {
        const searchableText = `
          ${product.name}
          ${product.brand}
          ${product.category}
          ${product.description}
        `.toLowerCase();

        return searchableText.includes(lowerQuery);
      })
      .map((product) => ({
        id: product.id,
        name: product.name,
        slug: product.slug,
        brand: product.brand,
        category: product.category,
        price: product.price,
        imageUrl: product.imageUrl,
        excerpt: product.description.substring(0, 100),
      }))
      .slice(0, 10); // Return top 10 results
  }

  /**
   * Get suggestions based on partial query
   */
  static getSuggestions(query: string, limit: number = 5): string[] {
    if (query.length < 2) {
      return [];
    }

    const lowerQuery = query.toLowerCase().trim();
    const uniqueSuggestions = new Set<string>();

    // Add product names
    this.products.forEach((product) => {
      if (
        product.name.toLowerCase().includes(lowerQuery) &&
        uniqueSuggestions.size < limit
      ) {
        uniqueSuggestions.add(product.name);
      }
    });

    // Add brands
    if (uniqueSuggestions.size < limit) {
      this.products.forEach((product) => {
        if (
          product.brand.toLowerCase().includes(lowerQuery) &&
          !uniqueSuggestions.has(product.brand) &&
          uniqueSuggestions.size < limit
        ) {
          uniqueSuggestions.add(product.brand);
        }
      });
    }

    // Add categories
    if (uniqueSuggestions.size < limit) {
      this.products.forEach((product) => {
        if (
          product.category.toLowerCase().includes(lowerQuery) &&
          !uniqueSuggestions.has(product.category) &&
          uniqueSuggestions.size < limit
        ) {
          uniqueSuggestions.add(product.category);
        }
      });
    }

    return Array.from(uniqueSuggestions);
  }
}
