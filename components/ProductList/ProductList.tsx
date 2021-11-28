import Product from '@components/Product/Product';
import { useProductShelf } from '@components/ProductShelf/useProductShelf';
import { compare } from '@utils/compare';
import { possibleFilters } from '@utils/filters';
import * as React from 'react';
import { ProductsContainer } from './styles';

function ProductList() {
  const { products, activeFilters, sort } = useProductShelf();

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

export default ProductList;
