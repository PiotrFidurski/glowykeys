import { FilterFnProps } from './types';

function variant({ product, variants }: FilterFnProps) {
  return variants.length ? variants.includes(product.variant) : product;
}

function connectivity(props: FilterFnProps) {
  return props.connectivity.length ? props.connectivity.includes(props.product.connectivity) : props.product;
}

export const possibleFilters = [variant, connectivity];
