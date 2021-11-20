import { cartData } from 'data';
import * as React from 'react';
import { CartContext } from './CartContext';
import CartRoot from './CartRoot';
import { Action, State } from './types';

interface Props {
  ui: React.ReactElement;
  reducer: (state: State, action: Action) => State;
}

const initialState: State = {
  open: false,
  items: cartData,
};

function CartProvider({ children, ui, reducer }: React.PropsWithChildren<Props>) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const contextValue = React.useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
      <CartRoot cartUi={ui} />
    </CartContext.Provider>
  );
}

export default CartProvider;
