import * as React from 'react';
import { CartContext } from './CartContext';

const useCart = () => {
  const context = React.useContext(CartContext);

  if (!context) throw new Error('You are using CartContext outside of CartProvider');

  return context;
};

export { useCart };
