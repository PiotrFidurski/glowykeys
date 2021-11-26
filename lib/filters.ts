import { FilterFnProps } from './types';

function variants({ product, variant }: FilterFnProps) {
  return variant && variant.length ? variant.includes(product.variant) : product;
}

function connectivity(props: FilterFnProps) {
  return props.connectivity && props.connectivity.length
    ? props.connectivity.includes(props.product.connectivity)
    : props.product;
}

function brands({ product, brand }: FilterFnProps) {
  return brand && brand.length ? brand.includes(product.brand) : product;
}

function colors({ product, color }: FilterFnProps) {
  return color && color.length ? color.includes(product.color) : product;
}

export const possibleFilters = [variants, connectivity, brands, colors];
