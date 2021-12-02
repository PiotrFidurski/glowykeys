import styled from 'styled-components';

export const StickyContainer = styled.div`
  position: sticky;
  top: 70px;
  background: rgba(33 150 243 / 8%);
  color: white;
  grid-area: filters;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 100;
  padding: 1rem;
  backdrop-filter: blur(10px);
  width: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: none;

  @media (min-width: 768px) {
    grid-area: filters;
    display: block;
  }
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
