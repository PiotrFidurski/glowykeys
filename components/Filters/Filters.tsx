import { useRouter } from 'next/router';
import * as React from 'react';
import Filter from './Filter';
import { H3, List, Nav, Separator } from './styles';
import { FilterTypes } from './types';

interface Props {
  filters: FilterTypes;
  onFilter: React.Dispatch<React.SetStateAction<FilterTypes>>;
}

function Filters({ onFilter, filters }: Props) {
  const { push } = useRouter();

  React.useEffect(() => {
    push({ pathname: 'keyboards', query: { ...filters } }, null, { scroll: false, shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Nav aria-label="filter menu">
      <Separator />
      <H3>CONNECTIVITY</H3>
      <List aria-label="connectivity filter options" role="list">
        {['wired', 'wireless'].map((filter) => (
          <Filter name={filter} onFilter={onFilter} type="connectivity" filters={filters} />
        ))}
      </List>
      <Separator />
      <H3>VARIANTS</H3>
      <List aria-label="variants filter options" role="list">
        {['casual', 'gaming'].map((filter) => (
          <Filter name={filter} onFilter={onFilter} type="variants" filters={filters} />
        ))}
      </List>
    </Nav>
  );
}

export default Filters;
