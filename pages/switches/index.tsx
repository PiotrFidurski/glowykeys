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

function SwitchesPage({ switches }) {
  return (
    <>
      <Head>
        <title>Browse for Switches</title>
        <meta
          name="description"
          content="Find the latest mechanical key switches, quiet switches, clicky switches, perfect switches for accurate typing and hardcore gaming."
        />
      </Head>
      <Main as={motion.main} {...pageAnimation}>
        <Header>
          <HeaderTextContentContainer>
            <h1>Level up your workflow with the best mechanical key switches</h1>
            <h2>Quiet switches with tactile feedback, making it perfect for accurate typing</h2>
          </HeaderTextContentContainer>
          <HeaderImageContainer>
            <Image src="/assets/images/switches_banner.png" layout="responsive" width={600} height={600} priority />
          </HeaderImageContainer>
        </Header>
        <ProductShelfProvider products={switches}>
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

  const response = await fetch(`${process.env.BASE_URL}/api/switches`);

  const { data }: { data: Array<ProductType> } = await response.json();

  return {
    props: { switches: data },
  };
};

export default SwitchesPage;
