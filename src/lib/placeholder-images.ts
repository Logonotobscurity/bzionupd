import data from './placeholder-images.json';
import productImages from './products.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export function findImage(id: string): ImagePlaceholder {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    // Return a default/fallback image if not found
    return {
      id: 'fallback',
      description: 'Placeholder Image',
      imageUrl: 'https://picsum.photos/seed/fallback/800/600',
      imageHint: 'placeholder',
    };
  }
  return image;
}

/**
 * Finds product images from products.json based on the product slug.
 * It uses the first part of the slug (the brand/product name) to find a match.
 * @param slug The slug of the product to find images for.
 * @returns An array of image URLs, or an empty array if not found.
 */
export function getProductImages(slug: string): string[] {
  if (!slug) return [];
  const slugPrefix = slug.split('-')[0];
  const imageInfo = productImages.products.find(p => p.id.startsWith(slugPrefix));
  return imageInfo ? imageInfo.images : [];
}
