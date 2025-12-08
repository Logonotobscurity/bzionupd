
import * as staticRepo from '@/repositories/static/productRepository';
import * as brandRepo from '@/repositories/static/brandRepository';
import * as categoryRepo from '@/repositories/static/categoryRepository';
import * as companyRepo from '@/repositories/static/companyRepository';
import { Product, Brand, Category, Company } from '@/lib/schema';

const repo = staticRepo;

export const getAllProducts = async (): Promise<Product[]> => {
    return repo.all();
};

export const getProductBySku = async (sku: string): Promise<Product | undefined> => {
    return repo.findBySku(sku);
};

export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
    return repo.findBySlug(slug);
};

export const getProductsByBrand = async (brandSlug: string): Promise<Product[]> => {
    return repo.findByBrand(brandSlug);
};

export const getProductsByCategory = async (categorySlug: string): Promise<Product[]> => {
    return repo.findByCategory(categorySlug);
};

export const getProductsByCompanySlug = async (slug: string): Promise<Product[]> => {
    const company = await getCompanyBySlug(slug);
    if (!company) return [];

    const allBrands = await brandRepo.all();
    const companyBrandNames = allBrands
        .filter(b => b.companyId === company.id)
        .map(b => b.name);

    const allProducts = await repo.all();
    return allProducts.filter(p => companyBrandNames.includes(p.brand));
};

export const searchProducts = async (query: string): Promise<Product[]> => {
    return repo.search(query);
};

export const getBrandStats = async () => {
    return repo.getBrandStats();
};

export const getCategoryStats = async () => {
    return repo.getCategoryStats();
};

export const getBrands = async (): Promise<Brand[]> => {
    return brandRepo.all();
};

export const getBrandsByCompanyId = async (companyId: number): Promise<Brand[]> => {
    const allBrands = await brandRepo.all();
    const companyBrands = allBrands.filter(b => b.companyId === companyId);
    const allProducts = await repo.all();

    return companyBrands.map(brand => {
        const brandProducts = allProducts.filter(p => p.brand === brand.name);
        const categorySlugs = brandProducts.map(p => p.categorySlug);
        const uniqueCategories = [...new Set(categorySlugs)];
        const newBrand: Brand = {
            ...brand,
            productCount: brandProducts.length,
            categoryCount: uniqueCategories.length
        };
        return newBrand;
    });
};

export const getCategoriesByCompanyId = async (companyId: number): Promise<Category[]> => {
    const allBrands = await brandRepo.all();
    const companyBrandNames = allBrands
        .filter(b => b.companyId === companyId)
        .map(b => b.name);

    const allProducts = await repo.all();
    const companyProducts = allProducts.filter(p => companyBrandNames.includes(p.brand));
    
    const categorySlugs = [...new Set(companyProducts.map(p => p.categorySlug))];
    const allCategories = await categoryRepo.all();
    
    const categoriesWithCounts: Category[] = [];

    for (const slug of categorySlugs) {
        const category = allCategories.find(c => c.slug === slug);
        if (category) {
            const categoryProducts = companyProducts.filter(p => p.categorySlug === slug);
            const brandNames = [...new Set(categoryProducts.map(p => p.brand))];
            
            categoriesWithCounts.push({
                ...category,
                productCount: categoryProducts.length,
                brandCount: brandNames.length,
            });
        }
    }
    
    return categoriesWithCounts;
};

export const getCategories = async (): Promise<Category[]> => {
    return categoryRepo.all();
};

export const getCompanies = async (): Promise<Company[]> => {
    return companyRepo.all();
};

export const getCompanyBySlug = async (slug: string): Promise<Company | undefined> => {
    const allCompanies = await companyRepo.all();
    return allCompanies.find(c => c.slug === slug);
};

interface ProductPageData {
    product: Product;
    brand: Brand;
    category: Category;
    company?: Company;
    relatedProducts: Product[];
}

export const getProductPageData = async (slug: string): Promise<ProductPageData | null> => {
    const product = await repo.findBySlug(slug);
    if (!product) {
        console.error(`Product with slug '${slug}' not found.`);
        return null;
    }

    const allBrands = await brandRepo.all();
    const brand = allBrands.find(b => b.name === product.brand);

    if (!brand) {
        console.error(`Brand '${product.brand}' for product '${slug}' not found.`);
        return null; 
    }

    const category = await categoryRepo.findBySlug(product.categorySlug);
    if (!category) {
        console.error(`Category with slug '${product.categorySlug}' for product '${slug}' not found.`);
        return null; 
    }

    let company: Company | undefined;
    if (brand && brand.companyId) {
        company = await companyRepo.findById(brand.companyId);
    }

    const relatedProducts = (await repo.findByCategory(product.categorySlug))
        .filter(p => p.id !== product.id)
        .slice(0, 3); 

    return {
        product,
        brand,
        category,
        company,
        relatedProducts,
    };
};
