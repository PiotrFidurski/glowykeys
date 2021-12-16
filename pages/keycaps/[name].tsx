import { fadeInUp, pageAnimation, slideLeft } from '@animations/products';
import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import Footer from '@components/Footer/Footer';
import * as S from '@styled/pages/ProductDetailsPageStyles';
import { theme } from '@styled/theme';
import { RoundButton, SquareButton } from '@utils/style-utils';
import { Product } from '@utils/types';
import { useBreadcrumbs } from '@utils/useBreadcrumbs';
import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import FilledHeart from '../../public/assets/vector/filledheart.svg';

interface Props {
  keycap: Product;
}

function Keyboard({ keycap }: Props) {
  const { prevPath, currentPath } = useBreadcrumbs();

  const { dispatch } = useCart();

  return (
    <>
      <Head>
        <title>
          {keycap.brand.toUpperCase()} {keycap.name}
        </title>
        <meta
          name="description"
          content={`Get ${keycap.name}. Custom keycaps, blank keycaps, 135 keys, cherry profile`}
        />
      </Head>
      <S.Main as={motion.main} {...pageAnimation}>
        <S.ProductDescriptionSection
          as={motion.section}
          variants={fadeInUp}
          role="region"
          aria-labelledby="product-description"
        >
          <span>
            <Link href={`/${prevPath}`}>{prevPath}</Link> \ {currentPath}
          </span>
          <S.Header aria-level={1} role="heading" aria-label="product">
            <h1 id="product-description">{keycap.name}</h1>
            <RoundButton aria-label="add to liked products">
              <FilledHeart width="24" height="24" fill={theme.color.highlight} />
            </RoundButton>
          </S.Header>
          <h2>{keycap.brand}</h2>
          <ul>
            {keycap.description.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
          <p>{keycap.price.toFixed(2)}</p>
          <SquareButton
            onClick={() => {
              dispatch({ type: actionTypes.addItem, payload: keycap });
            }}
            aria-label={`add ${keycap.name} to cart`}
            type="button"
          >
            Add to cart
          </SquareButton>
        </S.ProductDescriptionSection>
        <S.ImageGalleryContainer>
          <S.ImageOneContainer>
            <S.ImageWrapper as={motion.div} {...slideLeft}>
              <Image
                src={keycap.image.original}
                loading="lazy"
                placeholder="blur"
                blurDataURL={keycap.image.originalPlaceholder}
                layout="fill"
                sizes="75vw"
                objectFit="contain"
              />
            </S.ImageWrapper>
          </S.ImageOneContainer>
          <S.ImageTwoContainer>
            <S.ImageSmallWrapper as={motion.div} {...slideLeft}>
              <Image
                src={keycap.image.thumbnail}
                loading="lazy"
                layout="fill"
                sizes="40vw"
                blurDataURL={keycap.image.placeholder}
                objectFit="contain"
                placeholder="blur"
              />
            </S.ImageSmallWrapper>
          </S.ImageTwoContainer>
          <S.ImageThreeContainer>
            <S.ImageSmallWrapper as={motion.div} {...slideLeft}>
              <Image
                src={keycap.image.thumbnail}
                placeholder="blur"
                blurDataURL={keycap.image.placeholder}
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
                src={keycap.image.original}
                loading="lazy"
                placeholder="blur"
                blurDataURL={keycap.image.originalPlaceholder}
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

  const response = await fetch(`${process.env.BASE_URL}/api/keycaps/${params.name}`);

  const { data }: { data: Product } = await response.json();

  return {
    props: { keycap: data },
  };
};

export default Keyboard;
