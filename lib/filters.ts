import { FilterFnProps } from './types';

function variant({ product, variants }: FilterFnProps) {
  return variants.length ? variants.includes(product.variant) : product;
}

function cable({ product, connectivity }: FilterFnProps) {
  return connectivity.length ? connectivity.includes(product.connectivity) : product;
}

export const possibleFilters = [variant, cable];
