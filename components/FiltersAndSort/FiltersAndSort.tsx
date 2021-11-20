import { useRouter } from 'next/router';
import * as React from 'react';
import Filter from './Filter';
import { CheckBox, H3, Label, Li, List, LiText, Nav, Separator } from './styles';
import { FilterTypes, SortTypes } from './types';

interface Props {
  filters: FilterTypes;
  onFilter: React.Dispatch<React.SetStateAction<FilterTypes>>;
  onSort: React.Dispatch<React.SetStateAction<SortTypes>>;
}

function FilterAndSort({ onFilter, onSort, filters }: Props) {
  const { push } = useRouter();

  React.useEffect(() => {
    push({ pathname: 'keyboards', query: { ...filters } }, null, { scroll: false, shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const onSortChange = (e: React.BaseSyntheticEvent) => {
    onSort((prevSort) => ({ ...prevSort, order: e.target.value }));
  };

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
      <Separator />
      <H3>PRICE</H3>
      <List aria-label="sort by price" role="list">
        <Li>
          <Label htmlFor="ascending" aria-label="ascending" />
          <CheckBox onChange={onSortChange} name="ascending" id="ascending" value="ASC" type="checkbox" />
          <LiText>ASCENDING</LiText>
        </Li>
        <Li>
          <Label htmlFor="descending" aria-label="descending" />
          <CheckBox onChange={onSortChange} name="descending" id="descending" value="DESC" type="checkbox" />
          <LiText>DESCENDING</LiText>
        </Li>
      </List>
      <Separator />
    </Nav>
  );
}

export default FilterAndSort;
