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
  keyboards: Array<ProductType>;
}

function KeyboardsPage({ keyboards }: Props) {
  const { query } = useRouter();

  const [sort, setSort] = React.useState<SortTypes>({ order: 'ASC', type: 'price' });

  const [filters, setFilters] = React.useState<FilterTypes>(() => ({
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
          <Image src="/assets/images/Banner_keyboard.png" priority layout="fill" objectFit="cover" />
          <H1>
            Discover the gaming keyboard for you - equipped with speed, precision and your preferred typing experience.
          </H1>
        </Header>
        <AppliedFilters currentFilters={filters} setFilters={setFilters} />
        <ProductsSection aria-labelledby="products-section" role="region">
          <VisuallyHiddenH2 id="products-section">Products section</VisuallyHiddenH2>
          <AnimateSharedLayout>
            <FilterSection aria-label="filter products menu" role="region">
              <VisuallyHiddenH2>Product filters</VisuallyHiddenH2>
              <Filters
                filters={filters}
                filtersFor={{ variants: ['gaming', 'casual'], connectivity: ['wired', 'wireless'] }}
                onFilter={setFilters}
              />
              <Sorts onSort={setSort} sort={sort} />
            </FilterSection>
            <ProductsContainer role="region" aria-label="list of products">
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
