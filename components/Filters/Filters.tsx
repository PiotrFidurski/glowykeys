import { useRouter } from 'next/router';
import * as React from 'react';
import Filter from './Filter';
import { H3, List, Nav, Separator } from './styles';
import { FilterTypes } from './types';

interface Props {
  activeFilters: FilterTypes;
  onFilter: React.Dispatch<React.SetStateAction<FilterTypes>>;
  filters: Record<string, Array<string>>;
}

function Filters({ onFilter, activeFilters, filters }: Props) {
  const router = useRouter();

  React.useEffect(() => {
    router.push({ pathname: router.pathname, query: { ...activeFilters } }, null, { scroll: false, shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilters]);

  return (
    <Nav aria-label="filter menu">
      {Object.entries(filters).map(([by, options]) => (
        <div key={by}>
          <Separator />
          <H3>{by.toUpperCase()}</H3>
          <List aria-label={`${by} filter options`} role="list">
            {options.map((filter) => (
              <Filter key={filter} name={filter} onFilter={onFilter} type={by} filters={activeFilters} />
            ))}
          </List>
        </div>
      ))}
    </Nav>
  );
}

export default Filters;
