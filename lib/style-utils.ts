import { css } from 'styled-components';

export const LineOnHover = css`
  text-decoration: none;
  position: relative;
  transition: color 0.4s ease;
  &:hover {
    color: #0091ff;
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
    background: #0091ff;
    height: 2px;
  }
`;
