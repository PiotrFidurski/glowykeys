import Footer from '@components/Footer/Footer';
import * as S from '@styled/pages/ProductDetailsPageStyles';
import { Product } from '@utils/types';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';

interface Props {
  keyboard: Product;
}

function Keyboard({ keyboard }: Props) {
  return (
    <>
      <Head>
        <title>{keyboard.name}</title>
        <meta name="description" content="placeholder" />
      </Head>
      <S.Main>
        <S.ProductDescriptionSection role="region" aria-labelledby="product-description">
          <h1 id="product-description">{keyboard.name}</h1>
          <h2>{keyboard.brand}</h2>
          <ul>
            {keyboard.description.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
          <p>{keyboard.price.toFixed(2)}$</p>
        </S.ProductDescriptionSection>
        <S.ImageGalleryContainer>
          <S.ImageOneWrapper>
            <Image src="/assets/images/roccat-magma-review-1.png" layout="responsive" width={1200} height={800} />
          </S.ImageOneWrapper>
          <S.ImageTwoWrapper>
            <Image src="/assets/images/roccat-magma-review-2.png" layout="fill" objectFit="cover" />
          </S.ImageTwoWrapper>
          <S.ImageThreeWrapper>
            <Image src="/assets/images/roccat-magma-review-3.png" layout="fill" objectFit="cover" />
          </S.ImageThreeWrapper>
          <S.ImageFourWrapper>
            <Image src="/assets/images/roccat-magma-review-4.png" layout="responsive" width={1200} height={800} />
          </S.ImageFourWrapper>
        </S.ImageGalleryContainer>
        <Footer />
      </S.Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res, params }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=604800, stale-while-revalidate=59');

  const response = await fetch(`${process.env.BASE_URL}/api/keyboards/${params.id}`);

  const { data }: { data: Product } = await response.json();

  return {
    props: { keyboard: data },
  };
};

export default Keyboard;
