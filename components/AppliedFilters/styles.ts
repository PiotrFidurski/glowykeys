import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  padding: 1rem 0 0 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  grid-area: currentFilters;
  grid-column-start: 1;

  @media (min-width: 768px) {
    padding: 1rem 0 0 1rem;
  }
`;
