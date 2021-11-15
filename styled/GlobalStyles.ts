import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Comfortaa', cursive;
    background: ${({ theme: { background } }) => background.primary};
    color: ${({ theme: { color } }) => color.primary};
  }
`;

export { GlobalStyles };
