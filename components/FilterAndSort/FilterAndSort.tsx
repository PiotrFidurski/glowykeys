import { useRouter } from 'next/router';
import * as React from 'react';
import { CheckBox, Container, H3, Li, List, LiText, Separator } from './styles';
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
    <Container>
      <Separator />
      <List>
        <H3>CONNECTIVITY</H3>
        <Li>
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
      <List>
        <H3>VARIANTS</H3>
        <Li>
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
      <List>
        <H3>PRICE</H3>
        <Li>
          <CheckBox onChange={onSortChange} name="Ascending" id="Ascending" value="ASC" type="checkbox" />
          <LiText>ASCENDING</LiText>
        </Li>
        <Li>
          <CheckBox onChange={onSortChange} name="descending" id="descending" value="DESC" type="checkbox" />
          <LiText>DESCENDING</LiText>
        </Li>
      </List>
      <Separator />
    </Container>
  );
}

export default FilterAndSort;
