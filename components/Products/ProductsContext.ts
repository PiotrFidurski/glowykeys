import { FilterTypes, SortTypes } from '@components/Filters/types';
import { Product } from '@utils/types';
import * as React from 'react';

interface ProductsContextProps {
  products: Array<Product>;
  filters: Record<string, Array<string>>;
  sort: SortTypes;
  setSort: React.Dispatch<React.SetStateAction<SortTypes>>;
  activeFilters: FilterTypes;
  setActiveFilters: React.Dispatch<React.SetStateAction<FilterTypes>>;
}

const ProductsContext = React.createContext<ProductsContextProps | null>(null);

export { ProductsContext };
