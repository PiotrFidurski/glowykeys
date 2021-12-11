import { Product } from '@utils/types';
import * as React from 'react';
import { CartContext } from './CartContext';
import CartRoot from './CartRoot';
import { Action, actionTypes, State } from './types';

interface Props {
  ui: React.ReactElement;
  reducer: (state: State, action: Action) => State;
  initialItems: Array<Product>;
}

function CartProvider({ children, ui, reducer, initialItems }: React.PropsWithChildren<Props>) {
  const [state, dispatch] = React.useReducer(reducer, { open: false, items: initialItems || [] });

  React.useEffect(() => {
    const storedItems: Product[] = JSON.parse(localStorage.getItem('items'));

    if (storedItems && !initialItems.length) {
      dispatch({ type: actionTypes.initializeItems, payload: storedItems });
    }
  }, [initialItems]);

  React.useEffect(() => {
    localStorage.setItem('items', JSON.stringify(state.items));
  }, [state.items]);

  const contextValue = React.useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
      <CartRoot cartUi={ui} />
    </CartContext.Provider>
  );
}

export default CartProvider;
