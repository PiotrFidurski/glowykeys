import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      primary: string;
      secondary: string;
    };
    color: {
      primary: string;
      accent: string;
      highlight: string;
    };
  }
}
