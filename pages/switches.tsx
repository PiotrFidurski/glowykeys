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

function SwitchesPage({ switches }) {
  const [sort, setSort] = React.useState<SortTypes>({ order: 'ASC', type: 'price' });

  const [activeFilters, setActiveFilters, filters] = useFilters(switches);

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
              {switches
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
  res.setHeader('Cache-Control', 'public, s-maxage=172800, stale-while-revalidate=59');

  const response = await fetch(`${process.env.BASE_URL}/api/switches`);

  const { data }: { data: Array<ProductType> } = await response.json();

  return {
    props: { switches: data },
  };
};

export default SwitchesPage;
