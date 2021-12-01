import AppliedFilters from '@components/AppliedFilters/AppliedFilters';
import FilterList from '@components/FilterList/FilterList';
import Footer from '@components/Footer/Footer';
import ProductList from '@components/ProductList/ProductList';
import ProductShelfProvider from '@components/ProductShelf/ProductShelfProvider';
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
      <Main>
        <Header>
          <H1>
            Discover the gaming keyboard for you - equipped with speed, precision and your preferred typing experience.
          </H1>
        </Header>
        <ProductShelfProvider products={keyboards}>
          <AppliedFilters />
          <FilterList />
          <ProductList />
        </ProductShelfProvider>
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
