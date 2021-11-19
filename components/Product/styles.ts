import styled from 'styled-components';

export const Article = styled.article`
  flex-direction: column;
  max-width: 600px;
  padding-bottom: 1rem;
  border: 1px solid ${({ theme: { border } }) => border.color.primary};
  margin: 0 auto;
  width: 100%;
  display: flex;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 5px 0px ${({ theme: { boxShadowColor } }) => boxShadowColor.primary};
  }
`;

export const Heading = styled.header`
  padding-left: 1rem;
`;

export const H2 = styled.h2`
  font-size: clamp(0.8rem, 2vw, 1rem);
`;

export const Paragraph = styled.p`
  letter-spacing: 0.1rem;
  font-weight: 600;
  color: ${({ theme: { color } }) => color.highlight};
  font-size: 0.8rem;
  line-height: 1.7rem;
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme: { background } }) => background.card};
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
