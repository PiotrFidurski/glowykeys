import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @supports selector(:focus-visible) {
    button:focus-visible {
      outline: 2px solid ${({ theme: { color } }) => color.primary};
      outline-offset: 4px;
    }

    a:focus-visible {
      outline: 2px solid ${({ theme: { color } }) => color.primary};
      outline-offset: 4px;
    }
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme: { background } }) => background.primary};
    color: ${({ theme: { color } }) => color.primary};
  }
`;

export { GlobalStyles };
