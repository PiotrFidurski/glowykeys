import { pageAnimation } from '@animations/products';
import AppliedFilters from '@components/AppliedFilters/AppliedFilters';
import FilterList from '@components/FilterList/FilterList';
import Footer from '@components/Footer/Footer';
import ProductList from '@components/ProductList/ProductList';
import ProductShelfProvider from '@components/ProductShelf/ProductShelfProvider';
import { Header, HeaderImageContainer, HeaderTextContentContainer, Main } from '@styled/pages/SharedStyles';
import { Product as ProductType } from '@utils/types';
import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';

interface Props {
  keycaps: Array<ProductType>;
}

function KeycapsPage({ keycaps }: Props) {
  return (
    <>
      <Head>
        <title>Browse for Keycaps</title>
        <meta
          name="description"
          content="Find all kinds of unique looking keycaps, Select from the available keycap sets that we currently offer."
        />
      </Head>
      <Main as={motion.main} {...pageAnimation}>
        <Header>
          <HeaderTextContentContainer>
            <h1>Shop for most unique looking keycaps.</h1>
            <h2>
              Select from the available keycap sets that we currently offer, including In Stock, Group Buys, and
              Pre-orders!
            </h2>
          </HeaderTextContentContainer>
          <HeaderImageContainer>
            <Image src="/assets/images/keycaps_banner.png" layout="responsive" width={600} height={600} priority />
          </HeaderImageContainer>
        </Header>
        <ProductShelfProvider products={keycaps}>
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

  const response = await fetch(`${process.env.BASE_URL}/api/keycaps`);

  const { data }: { data: Array<ProductType> } = await response.json();

  return {
    props: { keycaps: data },
  };
};

export default KeycapsPage;
