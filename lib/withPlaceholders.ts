import { getPlaiceholder } from 'plaiceholder';
import { Product } from './types';

export function withPlaceholders(data: Array<Product>, size: number) {
  return data.map(async (product) => {
    const { base64 } = await getPlaiceholder(product.image.thumbnail, { size });

    return { ...product, image: { ...product.image, placeholder: base64 } };
  });
}
