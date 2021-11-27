import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Products from '@components/Products/Products';
import { H1, Header, Main } from '@styled/pages/SharedStyles';
import { Product as ProductType } from '@utils/types';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import * as React from 'react';

interface Props {
  keycaps: Array<ProductType>;
}

function KeycapsPage({ keycaps }: Props) {
  return (
    <>
      <Head>
        <title>Browse for Keycaps</title>
        <meta name="description" content="Find all kinds of unique looking keycaps" />
      </Head>
      <Navbar />
      <Main>
        <Header>
          <H1>Pick the most unique looking keycaps for your keyboards.</H1>
        </Header>
        <Products products={keycaps}>
          <Products.AppliedFilters />
          <Products.List>
            <Products.FilterAndSort />
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

  const response = await fetch(`${process.env.BASE_URL}/api/keycaps`);

  const { data }: { data: Array<ProductType> } = await response.json();

  return {
    props: { keycaps: data },
  };
};

export default KeycapsPage;
