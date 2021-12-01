import { ButtonStyles } from '@utils/style-utils';
import styled from 'styled-components';

export const Article = styled.article`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;

export const ImageWrapper = styled.div`
  max-width: 100px;
  background: ${({ theme: { color } }) => color.accent};
  width: 100%;
  flex-shrink: 0;
  min-height: 100px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    max-width: 150px;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const DetailsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 0px;
  padding: 0.2rem 0.5rem;
  overflow: hidden;
  width: auto;

  p {
    color: ${({ theme: { color } }) => color.highlight};
    font-size: clamp(1rem, 2vw, 1.4rem);
  }

  a {
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 150px;
    overflow: hidden;
    color: ${({ theme: { color } }) => color.highlight};

    @media (min-width: 768px) {
      max-width: 100%;
    }
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  border-radius: 9999px;
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

export const QuantityButton = styled.button<{ reverseBorderRadius?: boolean; transformOn?: boolean }>`
  ${ButtonStyles}
  border-radius: ${({ reverseBorderRadius }) => (reverseBorderRadius ? '0 50% 50% 0' : '50% 0 0 50%;')};
  min-width: 35px;
  min-height: 35px;
  border: 2px solid white;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme: { color } }) => color.highlight};
    background: ${({ theme: { color } }) => color.accent};
  }
`;

export const QTY = styled.input`
  border: 0;
  color: ${({ theme: { color } }) => color.primary};
  max-width: 35px;
  padding: 0;
  min-height: 35px;
  height: 100%;
  font-size: 1.2rem;
  background: transparent;
  width: 100%;
  display: flex;
  text-align: center;
  border-top: 2px solid ${({ theme: { color } }) => color.primary};
  border-bottom: 2px solid ${({ theme: { color } }) => color.primary};

  &:focus {
    outline: none;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  border: 0;
  margin: 1rem 0 1rem 0;
  height: 1px;
  background: ${({ theme: { color } }) => color.accent};
`;
