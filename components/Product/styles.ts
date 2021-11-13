import styled from 'styled-components';

export const Article = styled.article`
  border: 1px solid #171e2d;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  padding: 2rem;
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
  min-height: 250px;
  position: relative;

  img {
    transition: transform 0.3s ease;
  }

  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.1, 1.1);
    }
  }
`;

export const Description = styled.ul`
  padding: 0 1rem;
`;

export const Bullet = styled.li`
  padding: 0.5rem 0;
`;
