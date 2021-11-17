import { useRouter } from 'next/router';
import * as React from 'react';
import { CheckBox, Container, H3, Li, List, LiText, Separator } from './styles';

interface Props {
  filters: { variants: Array<string> | string; connectivity: Array<string> | string };
  onFilter: React.Dispatch<
    React.SetStateAction<{
      variants: string[];
      connectivity: string[];
    }>
  >;
  onSort: React.Dispatch<
    React.SetStateAction<{
      order: string;
      type: string;
    }>
  >;
}

function Filters({ onFilter, onSort, filters }: Props) {
  const { push } = useRouter();

  React.useEffect(() => {
    push({ pathname: 'keyboards', query: { ...filters } }, null, { scroll: false, shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <Container>
      <Separator />
      <List>
        <H3>CONNECTIVITY</H3>
        <Li>
          <CheckBox
            onChange={(e) =>
              onFilter((prevFilter) => ({
                ...prevFilter,
                connectivity: prevFilter.connectivity.includes(e.target.value)
                  ? prevFilter.connectivity.filter((con) => con !== e.target.value)
                  : [...prevFilter.connectivity, e.target.value],
              }))
            }
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
            onChange={(e) =>
              onFilter((prevFilter) => ({
                ...prevFilter,
                connectivity: prevFilter.connectivity.includes(e.target.value)
                  ? prevFilter.connectivity.filter((con) => con !== e.target.value)
                  : [...prevFilter.connectivity, e.target.value],
              }))
            }
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
            onChange={(e) => {
              onFilter((prevFilter) => ({
                ...prevFilter,
                variants: prevFilter.variants.includes(e.target.value)
                  ? prevFilter.variants.filter((con) => con !== e.target.value)
                  : [...prevFilter.variants, e.target.value],
              }));
            }}
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
            onChange={(e) => {
              onFilter((prevFilter) => ({
                ...prevFilter,
                variants: prevFilter.variants.includes(e.target.value)
                  ? prevFilter.variants.filter((con) => con !== e.target.value)
                  : [...prevFilter.variants, e.target.value],
              }));
            }}
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
          <CheckBox
            onChange={(e) => onSort((prevSort) => ({ ...prevSort, order: e.target.value }))}
            name="Ascending"
            id="Ascending"
            value="ASC"
            type="checkbox"
          />
          <LiText>ASCENDING</LiText>
        </Li>
        <Li>
          <CheckBox
            onChange={(e) => onSort((prevSort) => ({ ...prevSort, order: e.target.value }))}
            name="descending"
            id="descending"
            value="DESC"
            type="checkbox"
          />
          <LiText>DESCENDING</LiText>
        </Li>
      </List>
      <Separator />
    </Container>
  );
}

export default Filters;
