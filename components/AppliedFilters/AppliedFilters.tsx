import { FilterTypes } from '@components/FiltersAndSort/types';
import { SmallButton } from '@utils/style-utils';
import * as React from 'react';
import Cross from '../../public/assets/vector/cross.svg';
import { Container } from './styles';

interface Props {
  currentFilters: FilterTypes;
  setFilters: React.Dispatch<React.SetStateAction<FilterTypes>>;
}

function AppliedFilters({ currentFilters, setFilters }: Props) {
  const handleClick = (filter: string, type: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: (prevFilters[type] as string[]).filter((value: string) => value !== filter),
    }));
  };

  return (
    <Container>
      {Object.entries<Array<string>>(currentFilters as unknown as Record<string, string[]>).map(([type, filters]) =>
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
