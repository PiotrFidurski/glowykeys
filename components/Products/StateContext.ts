import { FilterTypes, SortTypes } from '@components/Filter/types';
import { Product } from '@utils/types';
import * as React from 'react';

interface StateContextProps {
  products: Array<Product>;
  filters: Record<string, Array<string>>;
  sort: SortTypes;
  activeFilters: FilterTypes;
}

const StateContext = React.createContext<StateContextProps | null>(null);

export { StateContext };
