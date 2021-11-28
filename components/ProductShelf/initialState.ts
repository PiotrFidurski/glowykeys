import { determineProductFilters } from '@utils/determineProductFilters';
import { Product } from '@utils/types';
import { ParsedUrlQuery } from 'querystring';

interface Props {
  query: ParsedUrlQuery;
  products: Array<Product>;
}

export const initialState = ({ query, products }: Props) => ({
  activeFilters: {
    brand: query.brand ? [].concat(query.brand) : [],
    color: query.color ? [].concat(query.color) : [],
    variant: query.variant ? [].concat(query.variant) : [],
    connectivity: query.connectivity ? [].concat(query.connectivity) : [],
  },
  products,
  filters: determineProductFilters(products),
  sort: { order: 'ASC', type: 'price' },
});
