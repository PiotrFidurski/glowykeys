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

export const Button = styled.button`
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

  &:focus {
    outline: 2px solid white;
    background: ${({ theme: { color } }) => color.accent};
  }
`;
