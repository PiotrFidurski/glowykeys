import { Product } from 'data';
import { Action, actionTypes, State } from './types';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actionTypes.openMenu:
      return {
        ...state,
        open: true,
      };
    case actionTypes.closeMenu:
      return {
        ...state,
        open: false,
      };
    case actionTypes.removeItem: {
      const itemToBeRemoved = action.payload as Product;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== itemToBeRemoved.id),
      };
    }
    case actionTypes.incrementQty: {
      const newItems = action.payload as Product[];
      return { ...state, items: newItems };
    }
    case actionTypes.decrementQty: {
      const newItems = action.payload as Product[];
      return { ...state, items: newItems };
    }
    default:
      return state;
  }
}
