import styled, { css } from 'styled-components';

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

export const Button = styled.button<{ transformOn?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 0;
  border-radius: 9999px;
  min-height: 50px;
  height: 100%;
  min-width: 50px;
  width: 100%;
  cursor: pointer;
  max-width: 50px;
  transition: transform 0.5s ease, outline-color 0.5s ease;
  transform: ${({ transformOn }) => (transformOn ? 'rotate(180deg)' : 'rotate(0)')};
  &:focus {
    outline: 2px solid ${({ transformOn }) => (transformOn ? '#F06071' : 'white')};
    background: ${({ theme: { color } }) => color.accent};
  }

  svg {
    transition: transform 0.5 ease, fill 0.5s ease;
    transform: ${({ transformOn }) => (transformOn ? 'rotate(180deg)' : 'rotate(0)')};
    fill: ${({ transformOn }) => (transformOn ? '#F06071' : 'white')};
  }
`;
