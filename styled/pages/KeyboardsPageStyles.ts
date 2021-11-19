import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'header header header header'
    'currentFilters currentFilters currentFilters currentFilters'
    'browse browse browse browse'
    'footer footer footer footer';
`;

export const Header = styled.header`
  grid-area: header;
  position: relative;
  text-align: center;
  display: flex;
  padding: 0 1rem;
  min-height: 600px;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  box-shadow: 0 1px 1px 0px ${({ theme: { boxShadowColor } }) => boxShadowColor.primary};

  img {
    z-index: -1;
    filter: brightness(0.2);
  }
`;

export const H1 = styled.h1`
  max-width: 600px;
  line-height: 2.45rem;
`;

export const FiltersContainer = styled.div`
  max-width: 1440px;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  grid-area: currentFilters;
  grid-column-start: 2;
`;

export const ProductsSection = styled.section`
  display: grid;
  grid-area: browse;
  max-width: 1440px;
  padding: 5rem 1rem;
  width: 100%;
  gap: 3rem;
  margin: 0 auto;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'filters filters filters filters'
    'items items items items';

  @media (min-width: 768px) {
    padding: 0;
    grid-template-areas: 'filters items items items';
  }
`;

export const FilterSection = styled.section`
  grid-area: filters;
`;

export const ProductsContainer = styled.section`
  grid-area: items;
  display: grid;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  gap: 2rem;

  grid-template-columns: minmax(330px, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    grid-column-start: 2;
  }
`;
