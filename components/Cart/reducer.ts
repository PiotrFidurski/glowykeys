import { Product } from '@utils/types';
import { Action, actionTypes, State } from './types';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actionTypes.initializeItems: {
      return {
        ...state,
        items: action.payload as Product[],
      };
    }
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
    case actionTypes.addItem: {
      const itemToBeAdded = action.payload as Product;

      const isItemInCart = state.items.find((item) => item.id === itemToBeAdded.id);

      return {
        ...state,
        items: isItemInCart ? state.items : [itemToBeAdded, ...state.items],
      };
    }
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
