import { FilterFnProps } from './types';

function variant({ product, variants }: FilterFnProps) {
  return variants && variants.length ? variants.includes(product.variant) : product;
}

function connectivity(props: FilterFnProps) {
  return props.connectivity && props.connectivity.length
    ? props.connectivity.includes(props.product.connectivity)
    : props.product;
}

function brands({ product, brand }: FilterFnProps) {
  return brand && brand.length ? brand.includes(product.brand) : product;
}

export const possibleFilters = [variant, connectivity, brands];
