import Footer from '@components/Footer/Footer';
import HotSales from '@components/HotSales/HotSales';
import * as S from '@styled/pages/HomePageStyles';
import { ImageWrapper, VisuallyHiddenH2 } from '@utils/style-utils';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import KeyboardIcon from '../public/assets/vector/keyboard.svg';
import KeycapIcon from '../public/assets/vector/keycap.svg';
import SwitchIcon from '../public/assets/vector/switch.svg';

function HomePage() {
  return (
    <>
      <Head>
        <title>Find the perfect keyboard for you</title>
        <meta name="description" content="shop for the best keyboards" />
      </Head>
      <S.Main>
        <HotSales />
        <S.ProductCategorySection role="region" aria-labelledby="product-category">
          <S.Hr />
          <VisuallyHiddenH2 id="product-category">Product Categories</VisuallyHiddenH2>
          <S.Nav>
            <Link href="/keyboards" passHref>
              <S.KeyboardsCategory aria-label="go to keyboards page">
                <S.H3>Keyboards</S.H3>
                <KeyboardIcon fill="white" width="150" height="150" />
              </S.KeyboardsCategory>
            </Link>
            <Link href="/keycaps" passHref>
              <S.KeyCapsCategory aria-label="go to keycaps page">
                <S.H3>Keycaps</S.H3>
                <KeycapIcon fill="white" width="150" height="150" />
              </S.KeyCapsCategory>
            </Link>
            <Link href="/switches" passHref>
              <S.SwitchesCategory aria-label="go to switches page">
                <S.H3>Switches</S.H3>
                <SwitchIcon fill="white" width="150" height="150" />
              </S.SwitchesCategory>
            </Link>
          </S.Nav>
          <S.Hr />
        </S.ProductCategorySection>
        <S.PopularSection aria-labelledby="popular-products" role="region">
          <VisuallyHiddenH2 id="popular-products">Popular products</VisuallyHiddenH2>
          <S.PopularKeycaps href="/">
            <p>Keycaps</p>
          </S.PopularKeycaps>
          <S.PopularSwitches href="/">
            <p>Switches</p>
          </S.PopularSwitches>
          <S.SeeAll href="/">
            <p>SHOP</p>
            <p>ALL</p>
          </S.SeeAll>
          <Link href="/keyboards?variant=gaming" passHref>
            <S.GamingKeyboards aria-label="gaming keyboards">
              <p>Gaming Keyboards</p>
              <ImageWrapper>
                <Image
                  src="/assets/images/razerornata.png"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/assets/images/razerornata.png"
                  quality={100}
                  layout="responsive"
                  width={800}
                  height={600}
                />
              </ImageWrapper>
            </S.GamingKeyboards>
          </Link>
          <S.SwitchesImage href="/" aria-label="keycaps">
            <ImageWrapper>
              <Image
                src="/assets/images/keycaps-black.png"
                placeholder="blur"
                blurDataURL="/assets/images/keycaps-black.png"
                loading="lazy"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
          </S.SwitchesImage>
          <S.KeycapImage href="/" aria-label="keyboards">
            <ImageWrapper>
              <Image
                src="/assets/images/halfkeyboard.png"
                loading="lazy"
                quality={100}
                placeholder="blur"
                blurDataURL="/assets/images/halfkeyboard.png"
                layout="fill"
                objectFit="cover"
              />
            </ImageWrapper>
          </S.KeycapImage>
          <Link href="/keyboards?variant=casual" passHref>
            <S.CasualKeyboards aria-label="casual keyboards">
              <p>Casual Keyboards</p>
              <ImageWrapper>
                <Image
                  src="/assets/images/kbblue.png"
                  placeholder="blur"
                  blurDataURL="/assets/images/kbblue.png"
                  loading="lazy"
                  quality={100}
                  layout="responsive"
                  width={800}
                  height={600}
                />
              </ImageWrapper>
            </S.CasualKeyboards>
          </Link>
        </S.PopularSection>
        <Footer />
      </S.Main>
    </>
  );
}

export default HomePage;
