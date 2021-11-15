import Cart from '@components/Cart/Cart';
import CartProvider from '@components/Cart/CartProvider';
import { reducer } from '@components/Cart/reducer';
import { GlobalStyles } from '@styled/GlobalStyles';
import { theme } from '@styled/theme';
import { render, RenderOptions } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CartProvider ui={<Cart />} reducer={reducer}>
      <GlobalStyles />
      {children}
    </CartProvider>
  </ThemeProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
