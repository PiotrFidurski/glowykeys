import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Comfortaa', cursive;
    background: #000000;
    color: #ffffff;
  }
`;

export { GlobalStyles };
