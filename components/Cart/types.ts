import { Product } from 'data';

export type Action = { type: string; payload?: unknown };

type PossibleTypes = 'openMenu' | 'closeMenu' | 'removeItem' | 'incrementQty' | 'decrementQty';

export const actionTypes: Record<PossibleTypes, string> = {
  openMenu: 'OPEN_MENU',
  closeMenu: 'CLOSE_MENU',
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
