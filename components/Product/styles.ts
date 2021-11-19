import styled from 'styled-components';

export const Article = styled.article`
  flex-direction: column;
  max-width: 600px;
  border: 1px solid ${({ theme: { color } }) => color.primary};
  margin: 0 auto;
  width: 100%;
  display: flex;
`;

export const Heading = styled.header``;

export const H2 = styled.h2`
  padding-left: 1rem;
  font-size: clamp(0.8rem, 2vw, 1rem);
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
  min-height: 340px;
  max-width: 100%;
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
