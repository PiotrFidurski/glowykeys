import * as React from 'react';
import { CartContext } from './CartContext';
import CartRoot from './CartRoot';

interface Props {
  ui: React.ReactElement;
}

function CartProvider({ children, ui }: React.PropsWithChildren<Props>) {
  const [open, setOpen] = React.useState(false);

  return (
    <CartContext.Provider value={{ open, setOpen }}>
      {children}
      <CartRoot cartUi={ui} />
    </CartContext.Provider>
  );
}

export default CartProvider;
