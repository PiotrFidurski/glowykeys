import AppliedFilters from '@components/AppliedFilters/AppliedFilters';
import Filter from '@components/Filter/Filter';
import Product from '@components/Product/Product';
import Sort from '@components/Sort/Sort';
import { FilterContainer, ProductsContainer, ProductsSection } from '@styled/pages/SharedStyles';
import { compare } from '@utils/compare';
import { possibleFilters } from '@utils/filters';
import { VisuallyHiddenH2 } from '@utils/style-utils';
import { AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';
import * as S from '../Filter/styles';
import { DispatchContext } from './DispatchContext';
import { initialState } from './initialState';
import { reducer } from './reducer';
import { StateContext } from './StateContext';
import { ProductListComposition, Props } from './types';
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
          <AnimateSharedLayout>{children}</AnimateSharedLayout>
        </ProductsSection>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function FilterAndSort() {
  const { sort, filters, activeFilters } = useProducts();

  return (
    <FilterContainer aria-label="product filters" role="region">
      <S.Nav aria-label="filter menu">
        {Object.entries(filters)
          .filter(([, value]) => value.length)
          .map(([by, options]) => (
            <div key={by}>
              <S.Separator />
              <S.H3>{by.toUpperCase()}</S.H3>
              <S.List aria-label={`${by} filter options`} role="list">
                {options.map((filter) => {
                  const isActive = activeFilters[by].includes(filter);
                  return <Filter key={filter} isSelected={isActive} name={filter} type={by} />;
                })}
              </S.List>
            </div>
          ))}
      </S.Nav>
      <S.Nav aria-label="sort menu">
        <S.Separator />
        <S.H3>PRICE</S.H3>
        <S.List aria-label="sort by price" role="list">
          {['ascending', 'descending'].map((value) => {
            const isSelected = value.slice(0, 3).toUpperCase() === sort.order;

            return <Sort key={value} name={value} isSelected={isSelected} />;
          })}
        </S.List>
        <S.Separator />
      </S.Nav>
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
Products.FilterAndSort = FilterAndSort;
Products.Cards = Cards;

export default Products;
