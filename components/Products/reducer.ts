import { Action, actionTypes, State } from './types';

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case actionTypes.orderByPrice: {
      const order = action.payload as string;
      return {
        ...state,
        sort: { ...state.sort, order },
      };
    }
    case actionTypes.setFilter: {
      const { value, type } = action.payload as { value: string; type: string };

      const isSelected = state.activeFilters[type].includes(value);

      return {
        ...state,
        activeFilters: isSelected
          ? { ...state.activeFilters, [type]: state.activeFilters[type].filter((filter: string) => filter !== value) }
          : { ...state.activeFilters, [type]: [...state.activeFilters[type], value] },
      };
    }
    case actionTypes.unsetFilter: {
      const { filter, type } = action.payload as { filter: string; type: string };
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          [type]: state.activeFilters[type].filter((value: string) => value !== filter),
        },
      };
    }
    default:
      return state;
  }
}
