import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Comfortaa', cursive;
    background: #030408;
    color: #ffffff;
  }
`;

export { GlobalStyles };
