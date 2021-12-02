import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  grid-template-areas:
    'header header header header'
    'products products products products'
    'footer footer footer footer';
`;

export const Header = styled.header`
  grid-area: header;
  position: relative;
  display: flex;
  text-align: center;
  min-height: 600px;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: ${({ theme: { background } }) => background.card};
  justify-content: space-around;
  width: 100%;
  box-shadow: 0px 0px 1px ${({ theme: { color } }) => color.accent};
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const HeaderTextContentContainer = styled.div`
  display: flex;
  max-width: 500px;
  flex-direction: column;

  h1 {
    font-size: clamp(1.5rem, 2vw, 3rem);
    color: ${({ theme: { color } }) => color.highlight};
  }

  h2 {
    line-height: clamp(1.525rem, 2vw, 1.825rem);
    font-size: clamp(1rem, 2vw, 1.5rem);
    font-weight: 500;
    color: ${({ theme: { color } }) => color.primary};
  }
`;

export const HeaderImageContainer = styled.div`
  max-width: 600px;
  width: 100%;

  img {
    filter: drop-shadow(0px 1px 2px rgba(255 255 255 / 50%)) brightness(0.7);
  }
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
  grid-column-gap: 1rem;
  grid-row-gap: 0.5rem;
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
