import AppliedFilters from '@components/AppliedFilters/AppliedFilters';
import FilterList from '@components/FilterList/FilterList';
import Footer from '@components/Footer/Footer';
import ProductList from '@components/ProductList/ProductList';
import ProductShelfProvider from '@components/ProductShelf/ProductShelfProvider';
import { Header, HeaderImageContainer, HeaderTextContentContainer, Main } from '@styled/pages/SharedStyles';
import { Product as ProductType } from '@utils/types';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';

interface Props {
  keyboards: Array<ProductType>;
}

function KeyboardsPage({ keyboards }: Props) {
  return (
    <>
      <Head>
        <title>Browse for keyboards</title>
        <meta
          name="description"
          content="Find the best keyboard for your own needs, whether you're a hardcore gamer or casual typer, we have you covered."
        />
      </Head>
      <Main>
        <Header>
          <HeaderTextContentContainer>
            <h1>Discover the gaming keyboard for you.</h1>
            <h2>equipped with speed, precision and your preferred typing experience.</h2>
          </HeaderTextContentContainer>
          <HeaderImageContainer>
            <Image src="/assets/images/keyboards_banner.png" layout="responsive" width={600} height={600} priority />
          </HeaderImageContainer>
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
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=59');

  const response = await fetch(`${process.env.BASE_URL}/api/keyboards`);

  const { data }: { data: Array<ProductType> } = await response.json();

  return {
    props: { keyboards: data },
  };
};

export default KeyboardsPage;
