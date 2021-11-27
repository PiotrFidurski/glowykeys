import AppliedFilters from '@components/AppliedFilters/AppliedFilters';
import Filters from '@components/Filters/Filters';
import { SortTypes } from '@components/Filters/types';
import Product from '@components/Product/Product';
import Sorts from '@components/Sorts/Sorts';
import { FilterSection, ProductsContainer, ProductsSection } from '@styled/pages/SharedStyles';
import { compare } from '@utils/compare';
import { possibleFilters } from '@utils/filters';
import { VisuallyHiddenH2 } from '@utils/style-utils';
import { Product as ProductType } from '@utils/types';
import { useFilters } from '@utils/useFilters';
import { AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ProductsContext } from './ProductsContext';
import { useProducts } from './useProducts';

interface Props {
  children: React.ReactChild[];
  products: Array<ProductType>;
}

interface ProductListComposition {
  AppliedFilters?: React.FunctionComponent;
  List?: React.FunctionComponent;
}

function Products({ products, children }: Props & ProductListComposition) {
  const { push, query, pathname } = useRouter();

  const [sort, setSort] = React.useState<SortTypes>({ order: 'ASC', type: 'price' });

  const { activeFilters, setActiveFilters, filters } = useFilters({ data: products, query });

  const contextValue = React.useMemo(
    () => ({ activeFilters, setActiveFilters, filters, sort, setSort, products }),
    [activeFilters, sort]
  );

  React.useEffect(() => {
    push({ pathname, query: { ...activeFilters } }, null, { scroll: false, shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters]);

  return (
    <ProductsContext.Provider value={contextValue}>
      <ProductsSection aria-labelledby="products-section" role="region">
        <VisuallyHiddenH2 id="products-section">Products section</VisuallyHiddenH2>
        {children}
      </ProductsSection>
    </ProductsContext.Provider>
  );
}

function List() {
  const { setSort, products, sort, activeFilters, filters, setActiveFilters } = useProducts();
  return (
    <AnimateSharedLayout>
      <FilterSection aria-label="filter products menu" role="region">
        <VisuallyHiddenH2>Product filters</VisuallyHiddenH2>
        <Filters activeFilters={activeFilters} filters={filters} onFilter={setActiveFilters} />
        <Sorts onSort={setSort} sort={sort} />
      </FilterSection>
      <ProductsContainer role="region" aria-label="list of products">
        <VisuallyHiddenH2>Product list</VisuallyHiddenH2>
        {products
          .filter((product) => possibleFilters.every((filterFn) => filterFn({ product, ...activeFilters })))
          .sort((productA, productB) => compare({ productA, productB, ...sort }))
          .map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </ProductsContainer>
    </AnimateSharedLayout>
  );
}

Products.AppliedFilters = AppliedFilters;
Products.List = List;

export default Products;
