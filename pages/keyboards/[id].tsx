import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import Footer from '@components/Footer/Footer';
import * as S from '@styled/pages/ProductDetailsPageStyles';
import { theme } from '@styled/theme';
import { RoundButton, SquareButton } from '@utils/style-utils';
import { Product } from '@utils/types';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';
import FilledHeart from '../../public/assets/vector/filledheart.svg';

interface Props {
  keyboard: Product;
}

function Keyboard({ keyboard }: Props) {
  const router = useRouter();

  const [, path] = router.pathname.split('/');

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
            {path} \ {keyboard.name.toLocaleLowerCase()}
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
              priority
              layout="responsive"
              width={1200}
              height={800}
            />
          </S.ImageOneWrapper>
          <S.ImageTwoWrapper>
            <Image src="/assets/images/roccat-magma-review-2.png" priority layout="fill" objectFit="cover" />
          </S.ImageTwoWrapper>
          <S.ImageThreeWrapper>
            <Image src="/assets/images/roccat-magma-review-3.png" priority layout="fill" objectFit="cover" />
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
