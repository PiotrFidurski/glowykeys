import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  grid-template-areas:
    'header header header header'
    'products products products products '
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
`;

export const H1 = styled.h1`
  max-width: 600px;
  line-height: 2.45rem;
`;

export const ProductsSection = styled.section`
  display: grid;
  max-width: 1440px;
  padding: 1rem 1rem;
  width: 100%;
  grid-area: products;
  grid-column-gap: 3rem;
  grid-row-gap: 1rem;
  margin: 0 auto;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'currentFilters currentFilters currentFilters currentFilters'
    'filters filters filters filters'
    'items items items items';

  @media (min-width: 768px) {
    padding: 1rem 1rem;
    grid-template-areas:
      'currentFilters currentFilters currentFilters currentFilters'
      'filters items items items';
  }
`;
