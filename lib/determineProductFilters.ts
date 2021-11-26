import { Product } from './types';

export function determineProductFilters(data: Array<Product>) {
  const possibleFilters = { brand: [], color: [], variant: [], connectivity: [] };

  data.map((product) =>
    Object.entries(product).filter(([key, value]) => {
      const filter: string[] | undefined = possibleFilters[key];

      return !filter?.includes(value) ? filter?.push(value) : null;
    })
  );

  return possibleFilters;
}
