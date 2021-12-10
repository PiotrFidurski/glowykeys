import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import Footer from '@components/Footer/Footer';
import * as S from '@styled/pages/ProductDetailsPageStyles';
import { theme } from '@styled/theme';
import { RoundButton, SquareButton } from '@utils/style-utils';
import { Product } from '@utils/types';
import { useBreadcrumbs } from '@utils/useBreadcrumbs';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import FilledHeart from '../../public/assets/vector/filledheart.svg';

interface Props {
  keyboard: Product;
}

function Keyboard({ keyboard }: Props) {
  const { prevCrumb, currentCrumb } = useBreadcrumbs();

  const { dispatch } = useCart();

  return (
    <>
      <Head>
        <title>{keyboard.name}</title>
        <meta name="description" content="placeholder" />
      </Head>
      <S.Main>
        <S.ProductDescriptionSection role="region" aria-labelledby="product-description">
          <span>
            <Link href={`/${prevCrumb}`}>{prevCrumb}</Link> \ {currentCrumb}
          </span>
          <S.Header role="heading" aria-label="product">
            <h1 id="product-description">{keyboard.name}</h1>
            <RoundButton aria-label="add to liked products">
              <FilledHeart width="24" height="24" fill={theme.color.highlight} />
            </RoundButton>
          </S.Header>
          <h2>{keyboard.brand}</h2>
          <ul>
            {keyboard.description.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
          <p>{keyboard.price.toFixed(2)}</p>
          <SquareButton
            onClick={() => {
              dispatch({ type: actionTypes.addItem, payload: keyboard });
            }}
            aria-label={`add ${keyboard.name} to cart`}
            type="button"
          >
            Add to cart
          </SquareButton>
        </S.ProductDescriptionSection>
        <S.ImageGalleryContainer>
          <S.ImageOneWrapper>
            <Image
              src="/assets/images/roccat-magma-review-1.png"
              loading="lazy"
              placeholder="blur"
              blurDataURL="/assets/images/roccat-magma-review-1.png"
              layout="responsive"
              width={1200}
              height={800}
            />
          </S.ImageOneWrapper>
          <S.ImageTwoWrapper>
            <Image
              src="/assets/images/roccat-magma-review-2.png"
              loading="lazy"
              layout="fill"
              blurDataURL="/assets/images/roccat-magma-review-2.png"
              objectFit="cover"
              placeholder="blur"
            />
          </S.ImageTwoWrapper>
          <S.ImageThreeWrapper>
            <Image
              src="/assets/images/roccat-magma-review-3.png"
              placeholder="blur"
              blurDataURL="/assets/images/roccat-magma-review-3.png"
              loading="lazy"
              layout="fill"
              objectFit="cover"
            />
          </S.ImageThreeWrapper>
          <S.ImageFourWrapper>
            <Image
              src="/assets/images/roccat-magma-review-4.png"
              layout="responsive"
              width={1200}
              height={800}
              loading="lazy"
              placeholder="blur"
              blurDataURL="/assets/images/roccat-magma-review-4.png"
            />
          </S.ImageFourWrapper>
        </S.ImageGalleryContainer>
        <Footer />
      </S.Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res, params }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=604800, stale-while-revalidate=59');

  const response = await fetch(`${process.env.BASE_URL}/api/keyboards/${params.name}`);

  const { data }: { data: Product } = await response.json();

  return {
    props: { keyboard: data },
  };
};

export default Keyboard;
