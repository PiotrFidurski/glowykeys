import Filters from '@components/Filters/Filters';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Product from '@components/Product/Product';
import { BrowseSection, Container, FiltersContainer, H1, Header, Main } from '@styled/pages/KeyboardsPageStyles';
import { compare } from '@utils/compare';
import { possibleFilters } from '@utils/filters';
import { Product as ProductType, QueryParams } from '@utils/types';
import { AnimateSharedLayout } from 'framer-motion';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';

interface Props {
  keyboards: Array<ProductType & { id: string }>;
}

const initialState = (queryParams: QueryParams) => ({
  variants: queryParams.variants ? [].concat(queryParams.variants) : [],
  connectivity: queryParams.connectivity ? [].concat(queryParams.connectivity) : [],
});

function KeyboardsPage({ keyboards }: Props) {
  const router = useRouter();

  const [sort, setSort] = React.useState({ order: 'ASC', type: 'price' });

  const [filters, setFilters] = React.useState(() => initialState(router.query));

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
              <Filters filters={filters} onFilter={setFilters} onSort={setSort} />
            </FiltersContainer>
            <BrowseSection>
              {keyboards
                .filter((product) => possibleFilters.every((filterFn) => filterFn({ product, ...filters })))
                .sort((productA, productB) => compare({ productA, productB, ...sort }))
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
