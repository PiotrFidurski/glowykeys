import { actionTypes } from '@components/ProductShelf/types';
import { useDispatch } from '@components/ProductShelf/useDispatch';
import { useProductShelf } from '@components/ProductShelf/useProductShelf';
import { SmallButton } from '@utils/style-utils';
import { motion } from 'framer-motion';
import * as React from 'react';
import Cross from '../../public/assets/vector/cross.svg';
import { AppliedFiltersContainer } from './styles';

function AppliedFilters() {
  const { activeFilters } = useProductShelf();

  const dispatch = useDispatch();

  const handleClick = (filter: string, type: string) => {
    dispatch({ type: actionTypes.unsetFilter, payload: { filter, type } });
  };

  return (
    <AppliedFiltersContainer>
      {Object.entries<Array<string>>(activeFilters as unknown as Record<string, string[]>).map(([type, filters]) =>
        filters.map((filter) => (
          <SmallButton
            as={motion.button}
            layout
            aria-label={`remove ${filter} filter`}
            onClick={() => handleClick(filter, type)}
            key={filter}
            type="button"
          >
            {filter} <Cross width="20" height="20" fill="white" />
          </SmallButton>
        ))
      )}
    </AppliedFiltersContainer>
  );
}

export default AppliedFilters;
