import { prisma } from '@/lib/db';

export const productRepo = {
  async getAll(options: { brandSlug?: string; categorySlug?: string } = {}) {
    const where: any = {}; // Prisma.ProductWhereInput
    if (options.brandSlug) {
      where.brand = { slug: options.brandSlug };
    }
    if (options.categorySlug) {
      where.categories = { some: { category: { slug: options.categorySlug } } };
    }

    return await prisma.product.findMany({
      where,
      include: {
        brand: true,
        images: true,
        categories: { include: { category: true } },
      },
    });
  },

  async getBySlug(slug: string) {
    return await prisma.product.findUnique({
      where: { slug },
      include: {
        brand: true,
        images: true,
        categories: { include: { category: true } },
      },
    });
  },
};
