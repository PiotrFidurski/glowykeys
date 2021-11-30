import { ButtonStyles } from '@utils/style-utils';
import styled from 'styled-components';

export const Article = styled.article`
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  align-items: flex-start;
`;

export const Container = styled.div`
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

export const DetailsContainer = styled.div`
  margin-left: 2rem;
`;

export const QuantityContainer = styled.div`
  display: flex;
  border-radius: 9999px;
  padding-left: 2px;
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
  min-width: 50px;
  min-height: 50px;
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
  max-width: 50px;
  padding: 0;
  min-height: 50px;
  height: 100%;
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
