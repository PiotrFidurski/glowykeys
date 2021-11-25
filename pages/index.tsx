import Footer from '@components/Footer/Footer';
import HotSales from '@components/HotSales/HotSales';
import Navbar from '@components/Navbar/Navbar';
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
      <Navbar />
      <S.Main>
        <HotSales />
        <S.ProductCategorySection role="region" aria-labelledby="product-category">
          <S.Hr />
          <VisuallyHiddenH2 id="product-category">Product Categories</VisuallyHiddenH2>
          <S.Nav>
            <Link href="/keyboards" passHref>
              <S.KeyboardsCategory aria-label="go to keyboards page">
                <S.H2>Keyboards</S.H2>
                <KeyboardIcon fill="white" width="150" height="150" />
              </S.KeyboardsCategory>
            </Link>
            <Link href="/keycaps" passHref>
              <S.KeyCapsCategory aria-label="go to keycaps page">
                <S.H2>Keycaps</S.H2>
                <KeycapIcon fill="white" width="150" height="150" />
              </S.KeyCapsCategory>
            </Link>
            <Link href="/switches" passHref>
              <S.SwitchesCategory aria-label="go to switches page">
                <S.H2>Switches</S.H2>
                <SwitchIcon fill="white" width="150" height="150" />
              </S.SwitchesCategory>
            </Link>
          </S.Nav>
          <S.Hr />
        </S.ProductCategorySection>
        <S.PopularSection>
          <S.PopularKeycaps href="/">
            <p>Popular</p>
            <p>Keycaps</p>
          </S.PopularKeycaps>
          <S.PopularSwitches href="/">
            <p>Popular</p>
            <p>Switches</p>
          </S.PopularSwitches>
          <S.SeeAll href="/">
            <p>SHOP</p>
            <p>ALL</p>
          </S.SeeAll>
          <S.GamingKeyboards href="/">
            <p>Gaming Keyboards</p>
            <ImageWrapper>
              <Image src="/assets/images/razerornata.png" objectFit="contain" priority quality={100} layout="fill" />
            </ImageWrapper>
          </S.GamingKeyboards>
          <S.SwitchesImage href="/">
            <ImageWrapper>
              <Image src="/assets/images/keycaps-black.png" priority quality={100} layout="fill" objectFit="cover" />
            </ImageWrapper>
          </S.SwitchesImage>
          <S.KeycapImage href="/">
            <ImageWrapper>
              <Image src="/assets/images/halfkeyboard.png" priority quality={100} layout="fill" objectFit="cover" />
            </ImageWrapper>
          </S.KeycapImage>
          <S.CasualKeyboards href="/">
            <p>Casual Keyboards</p>
            <ImageWrapper>
              <Image src="/assets/images/kbblue.png" priority quality={100} layout="fill" objectFit="contain" />
            </ImageWrapper>
          </S.CasualKeyboards>
        </S.PopularSection>
        <Footer />
      </S.Main>
    </>
  );
}

export default HomePage;
