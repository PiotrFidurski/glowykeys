import * as React from 'react';
import { CartContext } from './CartContext';
import CartRoot from './CartRoot';

interface Props {}

function CartProvider({ children }: React.PropsWithChildren<Props>) {
  const [open, setOpen] = React.useState(false);

  return (
    <CartContext.Provider value={{ open, setOpen }}>
      {children}
      <CartRoot />
    </CartContext.Provider>
  );
}

export default CartProvider;
