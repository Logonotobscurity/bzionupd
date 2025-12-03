
import { products } from '@/lib/all-products-data';
import { type Product, type Brand, type Category, type Company } from '@/lib/schema';
import { brands } from '@/lib/brand-data';
import { categories } from '@/lib/category-data';
import { companies } from '@/lib/company-data';

export class ProductService {
    private static products: Product[] = products.map(p => ({...p, imageUrl: p.images[0] ?? ''}));
    private static brands: Brand[] = brands;
    private static categories: Category[] = categories;
    private static companies: Company[] = companies;

    public static getAllProducts(): Product[] {
        return this.products;
    }

    public static getProductBySlug(slug: string): Product | undefined {
        return this.products.find(p => p.slug === slug);
    }

    public static getProductsByCategory(categorySlug: string): Product[] {
        return this.products.filter(p => p.categorySlug === categorySlug);
    }

    public static getProductsByBrand(brandSlug: string): Product[] {
        return this.products.filter(p => p.brand.toLowerCase().replace(/ /g, '-') === brandSlug);
    }

    public static getBrandStats() {
        const brandStats: { [key: string]: { productCount: number, categoryCount: number } } = {};

        this.products.forEach(product => {
            if (!brandStats[product.brand]) {
                brandStats[product.brand] = { productCount: 0, categoryCount: 0 };
            }
            brandStats[product.brand].productCount++;
        });

        Object.keys(brandStats).forEach(brand => {
            const categorySlugs = new Set(this.products.filter(p => p.brand === brand).map(p => p.categorySlug));
            brandStats[brand].categoryCount = categorySlugs.size;
        });

        return brandStats;
    }

    public static getCategoryStats() {
        const categoryStats: { [key: string]: { productCount: number, brandCount: number } } = {};

        this.products.forEach(product => {
            if (!categoryStats[product.categorySlug]) {
                categoryStats[product.categorySlug] = { productCount: 0, brandCount: 0 };
            }
            categoryStats[product.categorySlug].productCount++;
        });

        Object.keys(categoryStats).forEach(categorySlug => {
            const brandNames = new Set(this.products.filter(p => p.categorySlug === categorySlug).map(p => p.brand));
            categoryStats[categorySlug].brandCount = brandNames.size;
        });

        return categoryStats;
    }

    public static getProductPageData(slug: string) {
        const product = this.getProductBySlug(slug);
        if (!product) {
            return undefined;
        }

        const brand = this.brands.find(b => b.slug === product.brand.toLowerCase().replace(/ /g, '-'));
        const company = this.companies.find(c => c.id === product.companyId);
        const category = this.categories.find(c => c.slug === product.categorySlug);

        if (!brand || !category) {
            return undefined;
        }

        const relatedProducts = this.products
            .filter(p => p.categorySlug === product.categorySlug && p.slug !== slug)
            .slice(0, 4);

        return {
            product,
            brand,
            company,
            category,
            relatedProducts,
        };
    }
}
