import styled, { css } from 'styled-components';

const CategoryLink = css`
  max-width: 100%;
  text-decoration: none;
  color: ${({ theme: { color } }) => color.primary};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  position: relative;
  border: 2px solid ${({ theme: { color } }) => color.accent};
  display: flex;
  transition: border-color 0.3s ease;

  img {
    z-index: -1;
    transition: transform 0.9s ease;
  }

  &:hover {
    border-color: ${({ theme: { color } }) => color.highlight};
    cursor: pointer;
    h2 {
      transition: color 0.3s ease;
      color: ${({ theme: { color } }) => color.highlight};
    }

    img {
      transform: scale(1.1, 1.1);
    }
    svg {
      transition: fill 0.3s ease;
      fill: ${({ theme: { color } }) => color.highlight};
    }
  }
`;

export const Main = styled.main`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'hot-sales hot-sales hot-sales hot-sales'
    'categories categories categories categories'
    'midsection midsection midsection midsection'
    'footer footer footer footer';
`;

export const H2 = styled.h2`
  font-size: clamp(1.5rem, 2vw, 3rem);
`;

export const ProductCategorySection = styled.section`
  grid-area: categories;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1rem;
`;

export const Nav = styled.nav`
  width: 100%;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'keyboards keyboards keyboards keyboards'
    'keycaps keycaps switches switches';

  img {
    filter: brightness(0.5);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    grid-template-areas: 'keyboards keycaps switches';
    padding: 5rem 5rem;
  }
`;

export const KeyboardsCategory = styled.a`
  ${CategoryLink};
  grid-area: keyboards;
`;

export const KeyCapsCategory = styled.a`
  ${CategoryLink};
  grid-area: keycaps;
`;

export const SwitchesCategory = styled.a`
  ${CategoryLink};
  grid-area: switches;
`;

export const Hr = styled.hr`
  border: 0;
  margin: 5rem 0;
  border-top: 1px dashed ${({ theme: { color } }) => color.accent};
`;
