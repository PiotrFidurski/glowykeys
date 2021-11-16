import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'header header header header'
    'browse browse browse browse'
    'footer footer footer footer';
`;

export const Header = styled.header`
  grid-area: header;
  text-align: center;
  display: flex;
  padding: 0 1rem;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
`;

export const H1 = styled.h1``;

export const Container = styled.div`
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
    grid-template-areas: 'filters items items items';
  }
`;

export const FiltersContainer = styled.section`
  grid-area: filters;
`;

export const BrowseSection = styled.section`
  grid-area: items;
  display: grid;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  gap: 2rem;

  grid-template-columns: minmax(330px, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(330px, 330px));
    grid-column-start: 2;
  }
`;
