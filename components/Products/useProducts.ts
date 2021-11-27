import * as React from 'react';
import { ProductsContext } from './ProductsContext';

const useProducts = () => {
  const context = React.useContext(ProductsContext);

  if (!context) throw new Error('You are using ProductListContext outside of ProductListProvider');

  return context;
};

export { useProducts };
