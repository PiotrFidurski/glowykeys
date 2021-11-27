import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Products from '@components/Products/Products';
import { H1, Header, Main } from '@styled/pages/SharedStyles';
import { Product as ProductType } from '@utils/types';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import * as React from 'react';

function SwitchesPage({ switches }) {
  return (
    <>
      <Head>
        <title>Browse for Switches</title>
        <meta name="description" content="Find the latest mechanical key switches" />
      </Head>
      <Navbar />
      <Main>
        <Header>
          <H1>Level up your workflow or gaming with the best mechanical key switches</H1>
        </Header>
        <Products products={switches}>
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

  const response = await fetch(`${process.env.BASE_URL}/api/switches`);

  const { data }: { data: Array<ProductType> } = await response.json();

  return {
    props: { switches: data },
  };
};

export default SwitchesPage;
