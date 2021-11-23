import AppliedFilters from '@components/AppliedFilters/AppliedFilters';
import Filters from '@components/Filters/Filters';
import { FilterTypes, SortTypes } from '@components/Filters/types';
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import Product from '@components/Product/Product';
import Sorts from '@components/Sorts/Sorts';
import { FilterSection, H1, Header, Main, ProductsContainer, ProductsSection } from '@styled/pages/KeyboardsPageStyles';
import { compare } from '@utils/compare';
import { possibleFilters } from '@utils/filters';
import { VisuallyHiddenH2 } from '@utils/style-utils';
import { Product as ProductType } from '@utils/types';
import { AnimateSharedLayout } from 'framer-motion';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';

interface Props {
  keycaps: Array<ProductType>;
}

function KeycapsPage({ keycaps }: Props) {
  const { query } = useRouter();

  const [sort, setSort] = React.useState<SortTypes>({ order: 'ASC', type: 'price' });

  const [activeFilters, setActiveFilters] = React.useState<FilterTypes>(() => ({
    brands: query.brands ? [].concat(query.brands) : [],
  }));

  const filters = { brands: ['M7', 'KBDfans'] };

  return (
    <>
      <Head>
        <title>Browse for Keycaps</title>
        <meta name="description" content="Find all kinds of unique looking keycaps" />
      </Head>
      <Navbar />
      <Main>
        <Header>
          <Image src="/assets/images/keycapsbanner.png" priority layout="fill" objectFit="cover" />
          <H1>Pick the most unique looking keycaps for your keyboards.</H1>
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
              {keycaps
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
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  const response = await fetch('http://localhost:3000/api/keycaps');

  const { data }: { data: Array<ProductType> } = await response.json();

  return {
    props: { keycaps: data },
  };
};

export default KeycapsPage;
