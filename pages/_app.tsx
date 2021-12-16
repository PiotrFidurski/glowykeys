import Cart from '@components/Cart/Cart';
import CartProvider from '@components/Cart/CartProvider';
import { reducer } from '@components/Cart/reducer';
import Navbar from '@components/Navbar/Navbar';
import { RouterScrollProvider } from '@moxy/next-router-scroll';
import { GlobalStyles } from '@styled/GlobalStyles';
import { theme } from '@styled/theme';
import { AnimatePresence } from 'framer-motion';
import 'index.css';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import * as React from 'react';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <CartProvider ui={<Cart />} reducer={reducer} initialItems={[]}>
          <GlobalStyles />
          <NextNprogress showOnShallow={false} options={{ showSpinner: false }} color={theme.color.highlight} />
          <Navbar />
          <RouterScrollProvider disableNextLinkScroll>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </RouterScrollProvider>
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
