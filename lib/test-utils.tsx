import CartProvider from '@components/Cart/CartProvider';
import { GlobalStyles } from '@styled/GlobalStyles';
import { theme } from '@styled/theme';
import { render, RenderOptions } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CartProvider>
      <GlobalStyles />
      {children}
    </CartProvider>
  </ThemeProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
