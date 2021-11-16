import Filters from '@components/Filters/Filters';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Product from '@components/Product/Product';
import { BrowseSection, Container, FiltersContainer, H1, Header, Main } from '@styled/pages/KeyboardsPageStyles';
import { Product as ProductType } from 'data';
import { AnimateSharedLayout } from 'framer-motion';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import * as React from 'react';

interface Props {
  keyboards: Array<ProductType & { id: string }>;
}

function KeyboardsPage({ keyboards }: Props) {
  const [sort, setSort] = React.useState({ order: 'ASC', type: 'price' });
  const [{ variant, connectivity }, setFilter] = React.useState({ variant: [], connectivity: [] });

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
        <Container>
          <AnimateSharedLayout>
            <FiltersContainer>
              <Filters onFilter={setFilter} onSort={setSort} />
            </FiltersContainer>
            <BrowseSection>
              {keyboards
                .filter((product) => (variant.length > 0 ? variant.includes(product.variant) : product))
                .filter((product) => (connectivity.length > 0 ? connectivity.includes(product.connectivity) : product))
                .sort((productA, productB) =>
                  sort.order === 'ASC'
                    ? productA[sort.type] - productB[sort.type]
                    : productB[sort.type] - productA[sort.type]
                )
                .map((product) => (
                  <Product product={product} key={product.id} />
                ))}
            </BrowseSection>
          </AnimateSharedLayout>
        </Container>
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
