import { Action, actionTypes, Filter, State } from './types';

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
      const { filter, type } = action.payload as { filter: string; type: Filter };

      const isSelected = state.activeFilters[type].includes(filter);

      const filterToBeUpdated: Array<string> = state.activeFilters[type];

      return {
        ...state,
        activeFilters: isSelected
          ? { ...state.activeFilters, [type]: filterToBeUpdated.filter((value: string) => value !== filter) }
          : { ...state.activeFilters, [type]: [...filterToBeUpdated, filter] },
      };
    }
    case actionTypes.unsetFilter: {
      const { filter, type } = action.payload as { filter: string; type: Filter };

      const filterToBeUpdated: Array<string> = state.activeFilters[type];

      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          [type]: filterToBeUpdated.filter((value: string) => value !== filter),
        },
      };
    }
    default:
      return state;
  }
}
