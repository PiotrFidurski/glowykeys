import styled, { css } from 'styled-components';

const HideVisually = css`
  clip: rect(1px 1px 1px 1px);
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: 0;
  overflow: hidden;
`;

export const ButtonStyles = css`
  position: relative;
  background-color: transparent;
  color: ${({ theme: { color } }) => color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  font-size: clamp(1rem, 2vw, 1.4rem);
`;

export const LineOnHover = css`
  text-decoration: none;
  position: relative;
  transition: color 0.4s ease;

  &:hover {
    color: ${({ theme: { color } }) => color.highlight};
    cursor: pointer;

    &:before {
      width: 100%;
    }
  }

  &:before {
    transition: width 0.4s ease;
    position: absolute;
    content: '';
    top: 20px;
    bottom: 0;
    width: 0%;
    background: ${({ theme: { color } }) => color.highlight};
    height: 2px;
  }
`;

export const GradientText = css`
  background: linear-gradient(to left, #e91e63, #673ab7);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

export const ImageWrapper = styled.div`
  width: 100%;

  img {
    filter: brightness(0.9) drop-shadow(0px 2px 7px black) contrast(1.1) !important;
  }
`;

export const SmallImageWrapper = styled.div`
  max-width: 100px;
  background: ${({ theme: { color } }) => color.accent};
  width: 100%;
  flex-shrink: 0;
  min-height: 100px;
  position: relative;

  @media (min-width: 768px) {
    max-width: 150px;
  }
`;

export const SquareButton = styled.button`
  ${ButtonStyles};
  padding: 1rem;
  align-self: center;
  grid-area: button;
  max-width: 300px;
  width: 100%;
  background: ${({ theme: { color } }) => color.highlight};
  color: ${({ theme: { color } }) => color.primary};
  border: 0;
  min-width: 200px;
  transition: background-color 0.2s ease;

  &:hover {
    cursor: pointer;

    background: ${({ theme: { color } }) => color.btnHover};
    &:before {
      width: 100%;
    }
  }
`;

export const RoundButton = styled.button`
  ${ButtonStyles};
  color: ${({ theme: { color } }) => color.primary};
  border-radius: 9999px;
  position: relative;
  border-color: transparent;
  min-height: 50px;
  max-height: 50px;
  height: 100%;
  width: 100%;
  min-width: 50px;
  max-width: 50px;
  transition: transform 0.5s ease, outline-color 0.5s ease;

  &:focus {
    outline-offset: 0px;
    outline: 2px solid ${({ theme: { color } }) => color.highlight};
    background: ${({ theme: { color } }) => color.accent};
  }

  svg {
    transition: transform 0.5 ease, fill 0.5s ease;
  }
`;

export const SmallButton = styled.button`
  ${ButtonStyles};
  border-radius: 9999px;
  border: 2px solid ${({ theme: { color } }) => color.highlight};
  font-size: 1rem;
  gap: 1rem;
  color: ${({ theme: { color } }) => color.highlight};
  padding: 0.5rem 1rem;
  transition: color 0.3s ease, border 0.3s ease;

  svg {
    fill: ${({ theme: { color } }) => color.highlight};
    transition: fill 0.3s ease;
  }

  &:hover {
    color: ${({ theme: { color } }) => color.danger};
    border: 2px solid ${({ theme: { color } }) => color.danger};

    svg {
      fill: ${({ theme: { color } }) => color.danger};
    }
  }
`;

export const VisuallyHiddenH1 = styled.h1`
  ${HideVisually};
`;

export const VisuallyHiddenH2 = styled.h2`
  ${HideVisually};
`;

export const VisuallyHiddenSpan = styled.span`
  ${HideVisually};
`;

export const Hr = styled.hr`
  width: 100%;
  border: 0;
  margin: 1rem 0 1rem 0;
  height: 1px;
  background: ${({ theme: { color } }) => color.accent};
`;
