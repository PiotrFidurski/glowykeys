import AppliedFilters from '@components/AppliedFilters/AppliedFilters';
import Filters from '@components/Filters/Filters';
import Product from '@components/Product/Product';
import Sorts from '@components/Sorts/Sorts';
import { FilterContainer, ProductsContainer, ProductsSection } from '@styled/pages/SharedStyles';
import { compare } from '@utils/compare';
import { possibleFilters } from '@utils/filters';
import { VisuallyHiddenH2 } from '@utils/style-utils';
import { AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';
import { DispatchContext } from './DispatchContext';
import { initialState } from './initialState';
import { reducer } from './reducer';
import { StateContext } from './StateContext';
import { ListProps, ProductListComposition, Props } from './types';
import { useProducts } from './useProducts';

function Products({ products, children }: Props & ProductListComposition) {
  const { push, query, pathname } = useRouter();

  const [state, dispatch] = React.useReducer(reducer, { ...initialState({ query, products }), products });

  React.useEffect(() => {
    push({ pathname, query: { ...state.activeFilters } }, null, { scroll: false, shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activeFilters]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <ProductsSection aria-labelledby="products-section" role="region">
          <VisuallyHiddenH2 id="products-section">Products section</VisuallyHiddenH2>
          {children}
        </ProductsSection>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function List({ children }: ListProps) {
  return <AnimateSharedLayout>{children}</AnimateSharedLayout>;
}

function FilterAndSort() {
  return (
    <FilterContainer aria-label="product filters" role="region">
      <Filters />
      <Sorts />
    </FilterContainer>
  );
}

function Cards() {
  const { sort, activeFilters, products } = useProducts();
  return (
    <ProductsContainer aria-label="list of products" role="region">
      {products
        .filter((product) => possibleFilters.every((filterFn) => filterFn({ product, ...activeFilters })))
        .sort((productA, productB) => compare({ productA, productB, ...sort }))
        .map((product) => (
          <Product product={product} key={product.id} />
        ))}
    </ProductsContainer>
  );
}

Products.AppliedFilters = AppliedFilters;
Products.List = List;
Products.FilterAndSort = FilterAndSort;
Products.Cards = Cards;

export default Products;
