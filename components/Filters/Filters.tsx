import * as React from 'react';
import { CheckBox, Container, H3, Li, List, LiText, Separator } from './styles';

interface Props {
  onFilter: React.Dispatch<
    React.SetStateAction<{
      variant: string[];
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

function Filters({ onFilter, onSort }: Props) {
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
            onChange={(e) =>
              onFilter((prevFilter) => ({
                ...prevFilter,
                variant: prevFilter.variant.includes(e.target.value)
                  ? prevFilter.variant.filter((con) => con !== e.target.value)
                  : [...prevFilter.variant, e.target.value],
              }))
            }
            name="casual"
            id="casual"
            value="casual"
            type="checkbox"
          />
          <LiText>CASUAL</LiText>
        </Li>
        <Li>
          <CheckBox
            name="gaming"
            id="gaming"
            value="gaming"
            onChange={(e) =>
              onFilter((prevFilter) => ({
                ...prevFilter,
                variant: prevFilter.variant.includes(e.target.value)
                  ? prevFilter.variant.filter((con) => con !== e.target.value)
                  : [...prevFilter.variant, e.target.value],
              }))
            }
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
