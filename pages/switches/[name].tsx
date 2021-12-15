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
  switches: Product;
}

function Switch({ switches }: Props) {
  const { prevPath, currentPath } = useBreadcrumbs();

  const { dispatch } = useCart();

  return (
    <>
      <Head>
        <title>
          {switches.brand.toUpperCase()} {switches.name}
        </title>
        <meta
          name="description"
          content={`Get ${switches.name} ${switches.variant} keyboard. Featuring a compact Tenkeyless form factor, AIMO lighting and aluminum plates for protection.`}
        />
      </Head>
      <S.Main>
        <S.ProductDescriptionSection role="region" aria-labelledby="product-description">
          <span>
            <Link href={`/${prevPath}`}>{prevPath}</Link> \ {currentPath}
          </span>
          <S.Header role="heading" aria-label="product">
            <h1 id="product-description">{switches.name}</h1>
            <RoundButton aria-label="add to liked products">
              <FilledHeart width="24" height="24" fill={theme.color.highlight} />
            </RoundButton>
          </S.Header>
          <h2>{switches.brand}</h2>
          <ul>
            {switches.description.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
          <p>{switches.price.toFixed(2)}</p>
          <SquareButton
            onClick={() => {
              dispatch({ type: actionTypes.addItem, payload: switches });
            }}
            aria-label={`add ${switches.name} to cart`}
            type="button"
          >
            Add to cart
          </SquareButton>
        </S.ProductDescriptionSection>
        <S.ImageGalleryContainer>
          <S.ImageOneContainer>
            <S.ImageWrapper>
              <Image
                src={switches.image.original}
                loading="lazy"
                placeholder="blur"
                blurDataURL={switches.image.originalPlaceholder}
                layout="fill"
                sizes="75vw"
                objectFit="contain"
              />
            </S.ImageWrapper>
          </S.ImageOneContainer>
          <S.ImageTwoContainer>
            <S.ImageSmallWrapper>
              <Image
                src={switches.image.thumbnail}
                loading="lazy"
                layout="fill"
                sizes="40vw"
                blurDataURL={switches.image.placeholder}
                objectFit="contain"
                placeholder="blur"
              />
            </S.ImageSmallWrapper>
          </S.ImageTwoContainer>
          <S.ImageThreeContainer>
            <S.ImageSmallWrapper>
              <Image
                src={switches.image.thumbnail}
                placeholder="blur"
                blurDataURL={switches.image.placeholder}
                loading="lazy"
                sizes="40vw"
                layout="fill"
                objectFit="contain"
              />
            </S.ImageSmallWrapper>
          </S.ImageThreeContainer>
          <S.ImageFourContainer>
            <S.ImageWrapper>
              <Image
                src={switches.image.original}
                loading="lazy"
                placeholder="blur"
                blurDataURL={switches.image.originalPlaceholder}
                layout="fill"
                sizes="75vw"
                objectFit="contain"
              />
            </S.ImageWrapper>
          </S.ImageFourContainer>
        </S.ImageGalleryContainer>
        <Footer />
      </S.Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res, params }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=604800, stale-while-revalidate=59');

  const response = await fetch(`${process.env.BASE_URL}/api/switches/${params.name}`);

  const { data }: { data: Product } = await response.json();

  return {
    props: { switches: data },
  };
};

export default Switch;
