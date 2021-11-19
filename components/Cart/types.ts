import { Product } from '@utils/types';

export type Action = { type: string; payload?: unknown };

type PossibleTypes = 'openMenu' | 'closeMenu' | 'addItem' | 'removeItem' | 'incrementQty' | 'decrementQty';

export const actionTypes: Record<PossibleTypes, string> = {
  openMenu: 'OPEN_MENU',
  closeMenu: 'CLOSE_MENU',
  addItem: 'ADD_ITEM',
  removeItem: 'REMOVE_ITEM',
  incrementQty: 'INCREMENT_QTY',
  decrementQty: 'DECREMENT_QTY',
};

export interface State {
  open: boolean;
  items: Array<Product>;
}

export interface UpdateItemQtyProps {
  dispatch: React.Dispatch<Action>;
  updates: { items: Array<Product>; product: Product };
}
