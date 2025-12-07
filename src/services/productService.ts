
import * as staticRepo from '@/repositories/static/productRepository';
import * as brandRepo from '@/repositories/static/brandRepository';
import * as categoryRepo from '@/repositories/static/categoryRepository';
import * as companyRepo from '@/repositories/static/companyRepository';
// import * as dbRepo from '@/repositories/db/productRepository';
import { featureFlags } from '@/lib/featureFlags';

const repo = featureFlags.DATA_SOURCE === 'db' ? null : staticRepo;

export const getAllProducts = async () => {
    if (!repo) throw new Error('Database repository not implemented yet');
    return repo.all();
};

export const getProductBySku = async (sku: string) => {
    if (!repo) throw new Error('Database repository not implemented yet');
    return repo.findBySku(sku);
};

export const getProductBySlug = async (slug: string) => {
    if (!repo) throw new Error('Database repository not implemented yet');
    return repo.findBySlug(slug);
};

export const getProductsByBrand = async (brandSlug: string) => {
    if (!repo) throw new Error('Database repository not implemented yet');
    return repo.findByBrand(brandSlug);
};

export const getProductsByCategory = async (categorySlug: string) => {
    if (!repo) throw new Error('Database repository not implemented yet');
    return repo.findByCategory(categorySlug);
};

export const searchProducts = async (query: string) => {
    if (!repo) throw new Error('Database repository not implemented yet');
    return repo.search(query);
};

export const getBrandStats = async () => {
    if (!repo) throw new Error('Database repository not implemented yet');
    return repo.getBrandStats();
};

export const getCategoryStats = async () => {
    if (!repo) throw new Error('Database repository not implemented yet');
    return repo.getCategoryStats();
};

export const getBrands = async () => {
    return brandRepo.all();
};

export const getCategories = async () => {
    return categoryRepo.all();
};

export const getCompanies = async () => {
    return companyRepo.all();
};

export const getProductPageData = async (slug: string) => {
    if (!repo) throw new Error('Database repository not implemented yet');
    const product = await repo.findBySlug(slug);
    if (!product) {
        return null;
    }

    const [brand, category, company, relatedProducts] = await Promise.all([
        brandRepo.findById(product.brandId),
        categoryRepo.findBySlug(product.categorySlug),
        companyRepo.findById(product.companyId),
        repo.findByCategory(product.categorySlug).then(products => products.filter(p => p.id !== product.id)),
    ]);

    return {
        product,
        brand,
        category,
        company,
        relatedProducts,
    };
};
