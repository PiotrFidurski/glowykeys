import { Product } from 'data';

export function filterByVariant({ product, variants }: { product: Product; variants: Array<string> }) {
  return variants.length ? variants.includes(product.variant) : product;
}

export function filterByConnectivty({ product, connectivity }: { product: Product; connectivity: Array<string> }) {
  return connectivity.length ? connectivity.includes(product.connectivity) : product;
}
