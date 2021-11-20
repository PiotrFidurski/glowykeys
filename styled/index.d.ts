import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    boxShadowColor: {
      primary: string;
    };
    border: {
      color: {
        primary: string;
      };
    };
    background: {
      primary: string;
      secondary: string;
      card: string;
    };
    color: {
      primary: string;
      accent: string;
      highlight: string;
      danger: string;
    };
  }
}
