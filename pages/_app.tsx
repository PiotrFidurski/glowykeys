import Cart from '@components/Cart/Cart';
import CartProvider from '@components/Cart/CartProvider';
import { reducer } from '@components/Cart/reducer';
import { GlobalStyles } from '@styled/GlobalStyles';
import { theme } from '@styled/theme';
import 'index.css';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <CartProvider ui={<Cart />} reducer={reducer} initialItems={[]}>
          <GlobalStyles />
          <NextNprogress color={theme.color.highlight} />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
