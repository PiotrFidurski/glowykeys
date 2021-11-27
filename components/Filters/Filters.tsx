import { useProducts } from '@components/Products/useProducts';
import * as React from 'react';
import Filter from './Filter';
import { H3, List, Nav, Separator } from './styles';

function Filters() {
  const { filters } = useProducts();
  return (
    <Nav aria-label="filter menu">
      {Object.entries(filters)
        .filter(([, value]) => value.length)
        .map(([by, options]) => (
          <div key={by}>
            <Separator />
            <H3>{by.toUpperCase()}</H3>
            <List aria-label={`${by} filter options`} role="list">
              {options.map((filter) => (
                <Filter key={filter} name={filter} type={by} />
              ))}
            </List>
          </div>
        ))}
    </Nav>
  );
}

export default Filters;
