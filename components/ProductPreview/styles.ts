import styled from 'styled-components';

export const PreviewSection = styled.section`
  display: grid;
  grid-area: preview;
  max-width: 1440px;
  margin: 0 auto;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'hot-sales hot-sales hot-sales hot-sales'
    'image image image image'
    'customers customers title title';
  width: 100%;

  align-items: flex-start;
  justify-content: space-around;
  z-index: 2;
  gap: 0.5rem;

  img {
    z-index: -1;
  }

  @media (min-width: 768px) {
    padding: 2rem 2rem;
    grid-template-areas:
      'image image hot-sales hot-sales'
      'image image hot-sales hot-sales'
      'image image hot-sales hot-sales'
      'image image customers title';
    margin-top: 100px;
  }
`;

export const Preview = styled.div`
  grid-area: image;
  padding: 1rem;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 600px;
  flex-direction: column;
  z-index: -1;
  background: ${({ theme: { background } }) => background.card};

  img {
    filter: brightness(0.9) drop-shadow(0px 15px 15px black) contrast(1.2);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const HotSales = styled.section`
  padding: 2rem;
  grid-area: hot-sales;
  height: 100%;
  background: ${({ theme: { background } }) => background.card};

  h2 {
    letter-spacing: 3px;
  }

  p:nth-child(2) {
    font-size: 3rem;
    letter-spacing: 3px;
  }
`;

export const BuyNowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  p {
    color: ${({ theme: { color } }) => color.highlight};
    font-weight: 600;
    letter-spacing: 3px;
  }

  button {
    transition: color 0.3s ease;
    background: transparent;
    border: 0;
    color: ${({ theme: { color } }) => color.primary};
    &:hover {
      cursor: pointer;
      color: ${({ theme: { color } }) => color.highlight};
    }
  }
`;

export const Customers = styled.section`
  grid-area: customers;
  text-align: center;
  padding: 2rem;
  height: 100%;
  background: ${({ theme: { background } }) => background.card};

  h1 {
    font-size: 3rem;
    color: ${({ theme: { color } }) => color.highlight};
  }

  p {
    letter-spacing: 1.5px;
  }
`;

export const Description = styled.div`
  grid-area: title;
  padding: 2rem;
  height: 100%;
  text-align: center;
  background: ${({ theme: { background } }) => background.card};
  line-height: 1.525rem;

  p {
    font-size: 1rem;
    letter-spacing: 1.5px;
  }
`;

export const ButtonSeparator = styled.div`
  min-height: 20px;
  margin-bottom: 4px;
  width: 2px;
  background: ${({ theme: { color } }) => color.accent};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    color: ${({ theme: { color } }) => color.primary};
    background: transparent;
    letter-spacing: 2px;
    border: 0;
    transition: color 0.3s ease;
    &:hover {
      cursor: pointer;
      color: ${({ theme: { color } }) => color.highlight};
    }
  }
`;
