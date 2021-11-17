import styled from 'styled-components';

export const Article = styled.article`
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
`;

export const Heading = styled.header``;

export const H2 = styled.h2`
  font-size: clamp(1rem, 2vw, 1.4rem);
`;

export const Paragraph = styled.p`
  letter-spacing: 0.1rem;
  font-size: clamp(0.8rem, 2vw, 1rem);
  line-height: 1.7rem;
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme: { color } }) => color.accent};
  min-height: 250px;
  position: relative;

  img {
    transition: transform 0.3s ease;
  }

  &:hover {
    cursor: pointer;
    img {
      transform: translateY(-1rem);
    }
  }
`;
