import styled, { css } from 'styled-components';

const GridAreasStyles = css`
  flex-direction: column;
  display: flex;
  position: relative;
  text-decoration: none;
  padding: 5rem;
  justify-content: center;
  color: ${({ theme: { color } }) => color.primary};
  align-items: center;
  background: ${({ theme: { background } }) => background.card};
  text-align: center;

  img {
    will-change: contents;
    transition: transform 0.3s ease;
  }

  p {
    z-index: 1;
    margin: 0.5rem;
    font-weight: 600;
    font-size: clamp(1.3rem, 2vw, 2rem);
  }

  p:nth-child(1) {
    color: ${({ theme: { color } }) => color.highlight};
  }

  &:hover {
    img {
      transform: scale(1.2);
    }

    p {
      text-decoration: underline;
    }
  }
`;

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
    'popular popular popular popular'
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

export const PopularSection = styled.section`
  padding-bottom: 5rem;
  grid-template-columns: repeat(6, minmax(auto, 1fr));
  display: grid;
  grid-area: popular;
  grid-template-rows: repeat(4, minmax(auto, 200px));
  grid-template-areas:
    'casual-keyboards casual-keyboards casual-keyboards casual-keyboards casual-keyboards casual-keyboards'
    'popular-keycaps popular-keycaps popular-switches popular-switches shop-all shop-all'
    'gaming-keyboards gaming-keyboards gaming-keyboards gaming-keyboards gaming-keyboards gaming-keyboards'
    'keycap-image keycap-image keycap-image switches-image switches-image switches-image';
  max-width: 1660px;
  gap: 0.3rem;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1040px) {
    grid-template-rows: repeat(4, minmax(auto, 1fr));
    grid-template-columns: repeat(6, minmax(auto, 1fr));
    grid-template-areas:
      'popular-keycaps popular-switches shop-all casual-keyboards casual-keyboards casual-keyboards'
      'gaming-keyboards gaming-keyboards gaming-keyboards casual-keyboards casual-keyboards casual-keyboards'
      'gaming-keyboards gaming-keyboards gaming-keyboards casual-keyboards casual-keyboards casual-keyboards'
      'switches-image keycap-image stuff casual-keyboards casual-keyboards casual-keyboards';
  }
`;

export const SeeAll = styled.a`
  ${GridAreasStyles};
  grid-area: shop-all;

  p {
    color: ${({ theme: { color } }) => color.highlight};
  }
`;

export const GamingKeyboards = styled.a`
  ${GridAreasStyles};
  grid-area: gaming-keyboards;
  text-decoration: none;

  p {
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    padding: 1rem 1rem;
    background-color: #020202b8;
  }
`;

export const KeycapImage = styled.a`
  ${GridAreasStyles};
  grid-area: keycap-image;
`;

export const SwitchesImage = styled.a`
  ${GridAreasStyles};
  grid-area: switches-image;
`;

export const CasualKeyboards = styled.a`
  ${GridAreasStyles};
  grid-area: casual-keyboards;

  p {
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
    padding: 1rem 1rem;
    background-color: #020202b8;
  }
`;

export const PopularKeycaps = styled.a`
  ${GridAreasStyles};
  grid-area: popular-keycaps;
`;

export const PopularSwitches = styled.a`
  ${GridAreasStyles};
  grid-area: popular-switches;
`;

export const ImageWrapper = styled.a`
  position: relative;
  width: 100%;
`;
