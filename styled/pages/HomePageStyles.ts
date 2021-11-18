import styled, { css } from 'styled-components';

const MidSectionStyles = css`
  position: relative;
  text-decoration: none;
  color: ${({ theme: { color } }) => color.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 600px;

  span {
    z-index: -1;
  }

  img {
    transition: transform 0.9s ease;
  }

  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.1, 1.1);
    }
  }
`;

const CategoryLink = css`
  max-width: 100%;
  text-decoration: none;
  color: ${({ theme: { color } }) => color.primary};
  justify-content: center;
  align-items: center;
  min-height: 250px;
  position: relative;
  border: 1px solid ${({ theme: { color } }) => color.accent};
  display: flex;

  img {
    z-index: -1;
    transition: transform 0.9s ease;
  }

  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.1, 1.1);
    }
  }
`;

export const Main = styled.main`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'header header header header'
    'categories categories categories categories'
    'midsection midsection midsection midsection'
    'footer footer footer footer';
`;

export const Header = styled.header`
  display: grid;
  grid-area: header;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'heading heading heading heading'
    'button button button button';
  width: 100%;
  padding: 2rem 5rem;
  align-items: flex-start;
  justify-content: space-around;
  z-index: 2;

  img {
    z-index: -1;
  }

  @media (min-width: 768px) {
    grid-template-areas: 'heading heading heading button';
    margin-top: 100px;
  }
`;

export const HeaderSection = styled.section`
  max-width: 600px;
  grid-area: heading;
`;

export const H1 = styled.h1`
  font-size: clamp(1.5rem, 2vw, 3rem);
`;

export const Paragraph = styled.p`
  line-height: 1.7rem;
`;

export const Button = styled.button`
  padding: 1rem;
  grid-area: button;
  position: relative;
  max-width: 350px;
  border: 0;
  background-color: transparent;
  color: ${({ theme: { color } }) => color.primary};
  border: 2px solid ${({ theme: { color } }) => color.primary};
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: clamp(1rem, 2vw, 1.4rem);
  transition: border-color 0.3s linear;

  &:before {
    position: absolute;
    width: 0%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background: linear-gradient(to left, #e91e63, #673ab7);
    content: '';
    transition: width 0.3s linear;
  }

  &:hover {
    cursor: pointer;
    border-color: #e91e63;
    &:before {
      width: 100%;
    }
  }
`;

export const ProductCategorySection = styled.section`
  grid-area: categories;
  padding: 5rem 1rem;
  width: 100%;
  gap: 1rem;
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
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

export const BackgroundImageWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  top: 0;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  span {
    z-index: -1;
  }
`;

export const MidSection = styled.section`
  grid-area: midsection;
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'first-image first-image first-image first-image'
    'second-image second-image second-image second-image';

  img {
    filter: brightness(0.5);
  }

  @media (min-width: 768px) {
    grid-template-areas: 'first-image first-image second-image second-image';
  }
`;

export const MidSectionFirstImageWrapper = styled.a`
  ${MidSectionStyles};
  grid-area: first-image;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);

  @media (min-width: 768px) {
    left: -10%;
    grid-column-end: 4;
    clip-path: polygon(0 0, 74% 0, 100% 100%, 0 100%);
  }
`;

export const MidSectionSecondImageWrapper = styled.a`
  ${MidSectionStyles};
  bottom: 150px;
  grid-area: second-image;
  clip-path: polygon(0 30%, 100% 0, 100% 100%, 0% 100%);

  @media (min-width: 768px) {
    bottom: 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 39% 100%);
  }
`;

export const MidSectionText = styled.section`
  max-width: 50%;
  margin: 0 auto;
  text-align: center;
`;
