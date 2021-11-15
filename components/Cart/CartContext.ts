import * as React from 'react';
import { Action, actionTypes, State, UpdateItemQtyProps } from './types';

interface CartContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export function incrementQty({ dispatch, updates }: UpdateItemQtyProps) {
  const { items, product } = updates;
  const index = items.findIndex((item) => item.id === product.id);
  const newItem = { ...product, qty: product.qty + 1 };
  const itemsCopy = [...items];
  itemsCopy[index] = newItem;
  dispatch({ type: actionTypes.incrementQty, payload: itemsCopy });
}

export function decrementQty({ dispatch, updates }: UpdateItemQtyProps) {
  const { items, product } = updates;
  const index = items.findIndex((item) => item.id === product.id);
  const newItem = { ...product, qty: product.qty - 1 };
  const itemsCopy = [...items];
  itemsCopy[index] = newItem;
  dispatch({ type: actionTypes.incrementQty, payload: itemsCopy });
}

const CartContext = React.createContext<CartContextProps | null>(null);

export { CartContext };
