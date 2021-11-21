import styled from 'styled-components';

export const Article = styled.article`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  max-width: 130px;
  background: ${({ theme: { color } }) => color.accent};
  width: 100%;
  min-height: 130px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    max-width: 150px;
  }
`;

export const Details = styled.div`
  margin-left: 2rem;
`;

export const Quantity = styled.div`
  display: flex;
  max-width: 200px;
  width: 100%;
  align-items: center;
`;

export const A = styled.a`
  font-size: clamp(1rem, 2vw, 1.4rem);
  text-decoration: none;
  color: ${({ theme: { color } }) => color.primary};
`;

export const Paragraph = styled.p`
  letter-spacing: 0.2rem;
`;

export const QTY = styled.input`
  border: 0;
  color: ${({ theme: { color } }) => color.primary};
  max-width: 30px;
  background: transparent;
  width: 100%;
  display: flex;
  text-align: center;
`;
