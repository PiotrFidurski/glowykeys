import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Product from '@components/Product/Product';
import { BrowseSection, H1, Header, Main } from '@styled/pages/KeyboardsPageStyles';
import { data } from 'data';
import Head from 'next/head';
import * as React from 'react';

function KeyboardsPage() {
  return (
    <>
      <Head>
        <title>Browse for keyboards</title>
        <meta name="description" content="find the best keyboard for your own needs" />
      </Head>
      <Navbar />
      <Main>
        <Header>
          <H1>
            Discover the gaming keyboard for you - equipped with speed, precision and your preferred typing experience.
          </H1>
        </Header>
        <BrowseSection>
          {data.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </BrowseSection>
        <Footer />
      </Main>
    </>
  );
}

export default KeyboardsPage;
