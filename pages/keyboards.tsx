import FilterAndSort from '@components/FilterAndSort/FilterAndSort';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Product from '@components/Product/Product';
import { FilterSection, H1, Header, Main, ProductsContainer, ProductsSection } from '@styled/pages/KeyboardsPageStyles';
import { compare } from '@utils/compare';
import { possibleFilters } from '@utils/filters';
import { VisuallyHiddenH2 } from '@utils/style-utils';
import { Product as ProductType } from '@utils/types';
import { AnimateSharedLayout } from 'framer-motion';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';

interface Props {
  keyboards: Array<ProductType>;
}

function KeyboardsPage({ keyboards }: Props) {
  const { query } = useRouter();

  const [sort, setSort] = React.useState({ order: 'ASC', type: 'price' });

  const [filters, setFilters] = React.useState(() => ({
    variants: query.variants ? [].concat(query.variants) : [],
    connectivity: query.connectivity ? [].concat(query.connectivity) : [],
  }));

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
        <ProductsSection>
          <VisuallyHiddenH2>Products section</VisuallyHiddenH2>
          <AnimateSharedLayout>
            <FilterSection>
              <VisuallyHiddenH2>Product filters</VisuallyHiddenH2>
              <FilterAndSort filters={filters} onFilter={setFilters} onSort={setSort} />
            </FilterSection>
            <ProductsContainer>
              <VisuallyHiddenH2>Product list</VisuallyHiddenH2>
              {keyboards
                .filter((product) => possibleFilters.every((filterFn) => filterFn({ product, ...filters })))
                .sort((productA, productB) => compare({ productA, productB, ...sort }))
                .map((product) => (
                  <Product product={product} key={product.id} />
                ))}
            </ProductsContainer>
          </AnimateSharedLayout>
        </ProductsSection>
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
