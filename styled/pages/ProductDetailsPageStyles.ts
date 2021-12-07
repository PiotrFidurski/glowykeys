import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 4rem;
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
  min-height: 600px;
  max-height: 600px;
  background-color: ${({ theme: { background } }) => background.card};
`;

export const ImageGalleryContainer = styled.div`
  grid-area: image-gallery;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'image-one image-one image-one image-one'
    'image-two image-two image-three image-three'
    'image-four image-four image-four image-four';
`;

export const ImageOneWrapper = styled.div`
  width: 100%;
  grid-area: image-one;
  position: relative;
`;

export const ImageTwoWrapper = styled.div`
  width: 100%;
  max-height: 300px;
  min-height: 300px;
  grid-area: image-two;
  position: relative;
`;

export const ImageThreeWrapper = styled.div`
  width: 100%;
  max-height: 300px;
  min-height: 300px;
  grid-area: image-three;
  position: relative;
`;

export const ImageFourWrapper = styled.div`
  width: 100%;
  grid-area: image-four;
  position: relative;
`;
