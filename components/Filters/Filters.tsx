import { useRouter } from 'next/router';
import * as React from 'react';
import Filter from './Filter';
import { H3, List, Nav, Separator } from './styles';
import { FilterTypes } from './types';

interface Props {
  filters: FilterTypes;
  onFilter: React.Dispatch<React.SetStateAction<FilterTypes>>;
  filtersFor: Record<string, Array<string>>;
}

function Filters({ onFilter, filters, filtersFor }: Props) {
  const router = useRouter();

  React.useEffect(() => {
    router.push({ pathname: '', query: { ...filters } }, null, { scroll: false, shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Nav aria-label="filter menu">
      {Object.entries(filtersFor).map(([by, options]) => (
        <div key={by}>
          <Separator />
          <H3>{by.toUpperCase()}</H3>
          <List aria-label={`${by} filter options`} role="list">
            {options.map((filter) => (
              <Filter key={filter} name={filter} onFilter={onFilter} type={by} filters={filters} />
            ))}
          </List>
        </div>
      ))}
    </Nav>
  );
}

export default Filters;
