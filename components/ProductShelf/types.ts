import { Product } from '@utils/types';

export interface Props {
  children: React.ReactNode;
  products: Array<Product>;
}

export type Filter = 'brand' | 'connectivity' | 'color' | 'variant';

export type FiltersType = Record<Filter, Array<string>>;

export interface SortTypes {
  order: string;
  type: string;
}

export interface StateContextProps {
  products: Array<Product>;
  filters: FiltersType;
  sort: SortTypes;
  activeFilters: FiltersType;
}

export type Action = { type: string; payload?: unknown };

type PossibleTypes = 'orderByPrice' | 'setFilter' | 'unsetFilter';

export const actionTypes: Record<PossibleTypes, string> = {
  orderByPrice: 'ORDER_BY_PRICE',
  setFilter: 'SET_FILTER',
  unsetFilter: 'UNSET_FILTER',
};

export interface State {
  products: Array<Product>;
  filters: FiltersType;
  sort: SortTypes;
  activeFilters: FiltersType;
}
