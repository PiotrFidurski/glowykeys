import Cart from '@components/Cart/Cart';
import CartProvider from '@components/Cart/CartProvider';
import { reducer } from '@components/Cart/reducer';
import Navbar from '@components/Navbar/Navbar';
import { GlobalStyles } from '@styled/GlobalStyles';
import { theme } from '@styled/theme';
import { render, RenderOptions } from '@testing-library/react';
import { cartData } from '@utils/test-utils/data';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { NextRouter } from 'next/router';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';

export const mockRouter = ({ query, ...props }: Partial<NextRouter> = {}): NextRouter => ({
  asPath: '/',
  basePath: '/',
  back: jest.fn(() => Promise.resolve(true)),
  beforePopState: jest.fn(() => Promise.resolve(true)),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: true,
  isPreview: true,
  isReady: true,
  pathname: '',
  push: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve()),
  reload: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
  route: '',
  query: { ...query },
  ...props,
});

interface ProviderProps {
  children: React.ReactNode;
  routerProps: Partial<NextRouter>;
}

const Providers = ({ children, routerProps }: ProviderProps) => (
  <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map() }}>
    <RouterContext.Provider value={mockRouter(routerProps)}>
      <ThemeProvider theme={theme}>
        <CartProvider ui={<Cart />} reducer={reducer} initialItems={cartData}>
          <GlobalStyles />
          <Navbar />
          {children}
        </CartProvider>
      </ThemeProvider>
    </RouterContext.Provider>
  </SWRConfig>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions, routerProps?: Partial<NextRouter>) =>
  render(ui, { wrapper: (props) => Providers({ routerProps, ...props }), ...options });

export * from '@testing-library/react';
export { customRender as render };
