import styled from 'styled-components';

export const ProductsContainer = styled.div`
  grid-area: items;
  display: grid;
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  gap: 2rem;
  grid-template-columns: minmax(330px, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    grid-template-rows: repeat(3, minmax(200px, 1fr));
    grid-column-start: 2;
  }
`;
