import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 600px;
  position: relative;
  img {
    filter: brightness(0.5);
    filter: drop-shadow(1px);
  }
`;

export const Article = styled.article`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'heading heading heading heading'
    'button button button button';
  width: 100%;
  padding: 2rem 5rem;
  align-items: flex-start;
  justify-content: space-around;
  z-index: 2;

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

export const Paragraph = styled.p``;

export const Button = styled.button`
  padding: 1rem;
  grid-area: button;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductCategorySection = styled.section`
  padding: 2rem;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'keyboards keyboards keyboards keyboards'
    'keycaps keycaps switches switches';

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    grid-template-areas: 'keyboards keycaps switches';
  }
`;

export const KeyboardsCategory = styled.article`
  position: relative;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  grid-area: keyboards;
`;

export const KeyCapsCategory = styled.article`
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  grid-area: keycaps;
`;

export const SwitchesCategory = styled.article`
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  grid-area: switches;
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;
