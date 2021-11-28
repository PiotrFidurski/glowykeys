import styled from 'styled-components';

export const FilterContainer = styled.div`
  grid-area: filters;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const H3 = styled.h3`
  font-size: 1rem;
  margin: 1rem 0 0 0;
  padding: 0 2rem;
  color: ${({ theme: { color } }) => color.highlight};
  letter-spacing: 0.2rem;
`;

export const Separator = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  border-color: transparent;
  background: ${({ theme: { color } }) => color.accent};
`;

export const List = styled.ul`
  list-style: none;
  padding: 1rem 2rem;
`;
