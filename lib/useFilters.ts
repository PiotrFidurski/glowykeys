import { FilterTypes } from '@components/Filters/types';
import { useRouter } from 'next/router';
import * as React from 'react';
import { determineProductFilters } from './determineProductFilters';
import { Product } from './types';

export function useFilters(data: Array<Product>) {
  const { query } = useRouter();

  const [activeFilters, setActiveFilters] = React.useState<FilterTypes>({
    brand: query.brand ? [].concat(query.brand) : [],
    color: query.color ? [].concat(query.color) : [],
    variant: query.variant ? [].concat(query.variant) : [],
    connectivity: query.connectivity ? [].concat(query.connectivity) : [],
  });

  const filters = determineProductFilters(data);

  return [activeFilters, setActiveFilters, filters] as const;
}
