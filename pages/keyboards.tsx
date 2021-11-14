import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Product from '@components/Product/Product';
import { BrowseSection, H1, Header, Main } from '@styled/pages/KeyboardsPageStyles';
import { Product as ProductType } from 'data';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import * as React from 'react';

interface Props {
  keyboards: Array<ProductType & { id: string }>;
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
        <BrowseSection>
          {keyboards.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </BrowseSection>
        <Footer />
      </Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/keyboards');
  const { data }: { data: Array<ProductType> } = await response.json();

  return {
    props: { keyboards: data },
  };
};

export default KeyboardsPage;
