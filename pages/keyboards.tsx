import AppliedFilters from '@components/AppliedFilters/AppliedFilters';
import Filters from '@components/Filters/Filters';
import { SortTypes } from '@components/Filters/types';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Product from '@components/Product/Product';
import Sorts from '@components/Sorts/Sorts';
import { FilterSection, H1, Header, Main, ProductsContainer, ProductsSection } from '@styled/pages/SharedStyles';
import { compare } from '@utils/compare';
import { possibleFilters } from '@utils/filters';
import { VisuallyHiddenH2 } from '@utils/style-utils';
import { Product as ProductType } from '@utils/types';
import { useFilters } from '@utils/useFilters';
import { AnimateSharedLayout } from 'framer-motion';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import * as React from 'react';

interface Props {
  keyboards: Array<ProductType>;
}

function KeyboardsPage({ keyboards }: Props) {
  const [activeFilters, setActiveFilters, filters] = useFilters(keyboards);

  const [sort, setSort] = React.useState<SortTypes>({ order: 'ASC', type: 'price' });

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
        <AppliedFilters currentFilters={activeFilters} setFilters={setActiveFilters} />
        <ProductsSection aria-labelledby="products-section" role="region">
          <VisuallyHiddenH2 id="products-section">Products section</VisuallyHiddenH2>
          <AnimateSharedLayout>
            <FilterSection aria-label="filter products menu" role="region">
              <VisuallyHiddenH2>Product filters</VisuallyHiddenH2>
              <Filters activeFilters={activeFilters} filters={filters} onFilter={setActiveFilters} />
              <Sorts onSort={setSort} sort={sort} />
            </FilterSection>
            <ProductsContainer role="region" aria-label="list of products">
              <VisuallyHiddenH2>Product list</VisuallyHiddenH2>
              {keyboards
                .filter((product) => possibleFilters.every((filterFn) => filterFn({ product, ...activeFilters })))
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

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // res.setHeader('Cache-Control', 'public, s-maxage=172800, stale-while-revalidate=59');

  const response = await fetch(`${process.env.BASE_URL}/api/keyboards`);

  const { data }: { data: Array<ProductType> } = await response.json();

  return {
    props: { keyboards: data },
  };
};

export default KeyboardsPage;
