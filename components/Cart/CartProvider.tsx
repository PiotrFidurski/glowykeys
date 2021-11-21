import { Product } from '@utils/types';
import * as React from 'react';
import { CartContext } from './CartContext';
import CartRoot from './CartRoot';
import { Action, State } from './types';

interface Props {
  ui: React.ReactElement;
  reducer: (state: State, action: Action) => State;
  initialItems: Array<Product>;
}

function CartProvider({ children, ui, reducer, initialItems }: React.PropsWithChildren<Props>) {
  const [state, dispatch] = React.useReducer(reducer, { open: false, items: initialItems || [] });

  const contextValue = React.useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
      <CartRoot cartUi={ui} />
    </CartContext.Provider>
  );
}

export default CartProvider;
