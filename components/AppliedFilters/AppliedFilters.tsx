import { actionTypes } from '@components/Products/types';
import { useDispatch } from '@components/Products/useDispatch';
import { useProducts } from '@components/Products/useProducts';
import { SmallButton } from '@utils/style-utils';
import * as React from 'react';
import Cross from '../../public/assets/vector/cross.svg';
import { Container } from './styles';

function AppliedFilters() {
  const { activeFilters } = useProducts();

  const dispatch = useDispatch();

  const handleClick = (filter: string, type: string) => {
    dispatch({ type: actionTypes.unsetFilter, payload: { filter, type } });
  };

  return (
    <Container>
      {Object.entries<Array<string>>(activeFilters as unknown as Record<string, string[]>).map(([type, filters]) =>
        filters.map((filter) => (
          <SmallButton
            aria-label={`remove ${filter} filter`}
            onClick={() => handleClick(filter, type)}
            key={filter}
            type="button"
          >
            {filter} <Cross width="20" height="20" fill="white" />
          </SmallButton>
        ))
      )}
    </Container>
  );
}

export default AppliedFilters;
