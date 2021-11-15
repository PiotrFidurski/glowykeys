import styled from 'styled-components';

export const Container = styled.article`
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
  margin-right: -1rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const H2 = styled.h2`
  font-size: clamp(1rem, 2vw, 1.4rem);
`;

export const Paragraph = styled.p`
  letter-spacing: 0.2rem;
`;

export const QTY = styled.span`
  padding: 0 1rem;
`;
