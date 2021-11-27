import { useProducts } from '@components/Products/useProducts';
import { SmallButton } from '@utils/style-utils';
import * as React from 'react';
import Cross from '../../public/assets/vector/cross.svg';
import { Container } from './styles';

function AppliedFilters() {
  const { activeFilters, setActiveFilters } = useProducts();

  const handleClick = (filter: string, type: string) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [type]: (prevFilters[type] as string[]).filter((value: string) => value !== filter),
    }));
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
