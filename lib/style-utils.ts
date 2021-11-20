import styled, { css } from 'styled-components';

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

export const SquareButton = styled.button`
  ${ButtonStyles};
  padding: 1rem;
  align-self: center;
  grid-area: button;
  max-width: 300px;
  width: 100%;
  color: ${({ theme: { color } }) => color.primary};
  border: 2px solid ${({ theme: { color } }) => color.highlight};
  min-width: 200px;
  transition: border-color 0.3s linear;

  &:before {
    position: absolute;
    width: 0%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background: ${({ theme: { color } }) => color.highlight};
    content: '';
    transition: width 0.3s linear;
  }

  &:hover {
    cursor: pointer;
    &:before {
      width: 100%;
    }
  }
`;

export const RoundButton = styled.button<{ transformOn?: boolean }>`
  ${ButtonStyles};
  border: 0;
  color: ${({ theme: { color } }) => color.primary};
  border-radius: 9999px;
  min-height: 50px;
  height: 100%;
  min-width: 50px;
  width: 100%;
  max-width: 50px;
  transition: transform 0.5s ease, outline-color 0.5s ease;
  transform: ${({ transformOn }) => (transformOn ? 'rotate(180deg)' : 'rotate(0)')};

  &:focus {
    outline: 2px solid ${({ theme: { color }, transformOn }) => (transformOn ? color.danger : color.highlight)};
    background: ${({ theme: { color } }) => color.accent};
  }

  svg {
    transition: transform 0.5 ease, fill 0.5s ease;
    transform: ${({ transformOn }) => (transformOn ? 'rotate(180deg)' : 'rotate(0)')};
    fill: ${({ theme: { color }, transformOn }) => (transformOn ? color.danger : 'white')};
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

export const SmallButton = styled.button`
  ${ButtonStyles};
  border-radius: 9999px;
  border: 1px solid ${({ theme: { color } }) => color.highlight};
  font-size: 1rem;
  color: ${({ theme: { color } }) => color.highlight};
  padding: 0.5rem 1rem;
`;

export const VisuallyHiddenH2 = styled.h2`
  clip: rect(1px 1px 1px 1px);
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: 0;
  overflow: hidden;
`;
