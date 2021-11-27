import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Products from '@components/Products/Products';
import { H1, Header, Main } from '@styled/pages/SharedStyles';
import { Product as ProductType } from '@utils/types';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import * as React from 'react';

interface Props {
  keyboards: Array<ProductType>;
}

function KeyboardsPage({ keyboards }: Props) {
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
        <Products products={keyboards}>
          <Products.AppliedFilters />
          <Products.List>
            <Products.Filterss />
            <Products.Cards />
          </Products.List>
        </Products>
        <Footer />
      </Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=172800, stale-while-revalidate=59');

  const response = await fetch(`${process.env.BASE_URL}/api/keyboards`);

  const { data }: { data: Array<ProductType> } = await response.json();

  return {
    props: { keyboards: data },
  };
};

export default KeyboardsPage;
