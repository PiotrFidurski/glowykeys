import { FilterTypes, SortTypes } from '@components/Filters/types';
import { Product } from '@utils/types';

export interface Props {
  children: React.ReactNode;
  products: Array<Product>;
}

export interface ProductListComposition {
  AppliedFilters?: React.FunctionComponent;
  List?: React.FunctionComponent;
  Filters?: React.FunctionComponent;
  Cards?: React.FunctionComponent;
}

export interface ListProps {
  children?: React.ReactNode;
}

export type Action = { type: string; payload?: unknown };

type PossibleTypes = 'orderByPrice' | 'setFilter' | 'unsetFilter';

export const actionTypes: Record<PossibleTypes, string> = {
  // openMenu: 'OPEN_MENU',
  orderByPrice: 'ORDER_BY_PRICE',
  setFilter: 'SET_FILTER',
  unsetFilter: 'UNSET_FILTER',
};

export interface State {
  products: Array<Product>;
  filters: Record<string, Array<string>>;
  sort: SortTypes;
  activeFilters: FilterTypes;
}
