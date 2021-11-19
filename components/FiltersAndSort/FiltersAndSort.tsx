import { useRouter } from 'next/router';
import * as React from 'react';
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

  const onConnectivityChange = (e: React.BaseSyntheticEvent) => {
    const { value } = e.target;

    onFilter((prevFilter) => ({
      ...prevFilter,
      connectivity: prevFilter.connectivity.includes(value)
        ? prevFilter.connectivity.filter((con) => con !== value)
        : [...prevFilter.connectivity, value],
    }));
  };

  const onVariantsChange = (e: React.BaseSyntheticEvent) => {
    const { value } = e.target;

    onFilter((prevFilter) => ({
      ...prevFilter,
      variants: prevFilter.variants.includes(value)
        ? prevFilter.variants.filter((con) => con !== value)
        : [...prevFilter.variants, value],
    }));
  };

  const onSortChange = (e: React.BaseSyntheticEvent) => {
    onSort((prevSort) => ({ ...prevSort, order: e.target.value }));
  };

  return (
    <Nav aria-label="filter menu">
      <Separator />
      <H3>CONNECTIVITY</H3>
      <List aria-label="connectivity filter options" role="list">
        <Li>
          <Label htmlFor="wired" aria-label="wired" />
          <CheckBox
            onChange={onConnectivityChange}
            checked={filters.connectivity.includes('wired')}
            name="wired"
            id="wired"
            value="wired"
            type="checkbox"
          />
          <LiText>WIRED</LiText>
        </Li>
        <Li>
          <Label htmlFor="wireless" aria-label="wireless" />
          <CheckBox
            onChange={onConnectivityChange}
            checked={filters.connectivity.includes('wireless')}
            name="wireless"
            id="wireless"
            value="wireless"
            type="checkbox"
          />
          <LiText>WIRELESS</LiText>
        </Li>
      </List>
      <Separator />
      <H3>VARIANTS</H3>
      <List aria-label="variants filter options" role="list">
        <Li>
          <Label htmlFor="casual" aria-label="casual" />
          <CheckBox
            onChange={onVariantsChange}
            checked={filters.variants.includes('casual')}
            name="casual"
            id="casual"
            value="casual"
            type="checkbox"
          />
          <LiText>CASUAL</LiText>
        </Li>
        <Li>
          <Label htmlFor="gaming" aria-label="gaming" />
          <CheckBox
            onChange={onVariantsChange}
            name="gaming"
            id="gaming"
            checked={filters.variants.includes('gaming')}
            value="gaming"
            type="checkbox"
          />
          <LiText>GAMING</LiText>
        </Li>
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
