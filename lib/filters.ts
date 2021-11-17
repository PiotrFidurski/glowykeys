import { FilterProps } from './types';

function variant({ product, variants }: FilterProps) {
  return variants.length ? variants.includes(product.variant) : product;
}

function cable({ product, connectivity }: FilterProps) {
  return connectivity.length ? connectivity.includes(product.connectivity) : product;
}

export const possibleFilters = [variant, cable];
