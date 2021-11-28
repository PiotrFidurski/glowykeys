import * as React from 'react';
import { StateContext } from './StateContext';

const useProductShelf = () => {
  const context = React.useContext(StateContext);

  if (!context) throw new Error('You are using ProductListContext outside of ProductListProvider');

  return context;
};

export { useProductShelf };
