import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 5rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(5, minmax(auto, 1fr));
  grid-template-areas:
    'product-description product-description product-description product-description  product-description'
    'image-gallery image-gallery image-gallery image-gallery image-gallery'
    'footer footer footer footer footer';

  @media (min-width: 768px) {
    grid-template-areas:
      'image-gallery image-gallery image-gallery product-description product-description'
      'footer footer footer footer footer';
  }
`;

export const ProductDescriptionSection = styled.section`
  grid-area: product-description;
  padding: 2rem;
  height: auto;
  background-color: ${({ theme: { background } }) => background.card};

  span {
    color: ${({ theme: { color } }) => color.highlight};
    font-weight: 600;
    letter-spacing: 1px;
  }

  h2 {
    color: ${({ theme: { color } }) => color.highlight};
  }

  ul {
    padding: 1rem;
    line-height: 1.725rem;
  }

  p {
    font-size: 2rem;
    color: ${({ theme: { color } }) => color.highlight};
  }

  a {
    text-decoration: none;
    color: ${({ theme: { color } }) => color.primary};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageGalleryContainer = styled.div`
  grid-area: image-gallery;
  display: grid;
  position: relative;
  max-height: 900px;
  overflow: hidden;
  overflow-y: auto;
  gap: 0.5rem;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'image-one image-one image-one image-one'
    'image-two image-two image-three image-three'
    'image-four image-four image-four image-four';

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const ImageOneContainer = styled.div`
  width: 100%;
  min-height: 600px;
  background-color: ${({ theme: { background } }) => background.card};
  grid-area: image-one;
  display: flex;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
`;

export const ImageSmallWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const ImageTwoContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { background } }) => background.card};
  grid-area: image-two;
  position: relative;
`;

export const ImageThreeContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { background } }) => background.card};
  grid-area: image-three;
`;

export const ImageFourContainer = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { background } }) => background.card};
  grid-area: image-four;
`;
