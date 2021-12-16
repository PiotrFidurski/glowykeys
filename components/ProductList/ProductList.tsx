import { stagger } from '@animations/products';
import ProductCard from '@components/ProductCard/ProductCard';
import { useProductShelf } from '@components/ProductShelf/useProductShelf';
import { compare } from '@utils/compare';
import { possibleFilters } from '@utils/filters';
import { motion } from 'framer-motion';
import * as React from 'react';
import { ProductsContainer } from './styles';

function ProductList() {
  const { products, activeFilters, sort } = useProductShelf();

  return (
    <ProductsContainer as={motion.div} variants={stagger} aria-label="list of products" role="region">
      {products
        .filter((product) => possibleFilters.every((filterFn) => filterFn({ product, ...activeFilters })))
        .sort((productA, productB) => compare({ productA, productB, ...sort }))
        .map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </ProductsContainer>
  );
}

export default ProductList;
