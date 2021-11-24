import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import ProductPreview from '@components/ProductPreview/ProductPreview';
import * as S from '@styled/pages/HomePageStyles';
import { VisuallyHiddenH2 } from '@utils/style-utils';
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
        <ProductPreview />
        <S.ProductCategorySection role="region" aria-labelledby="product-category-label">
          <VisuallyHiddenH2 id="product-category-label">Product Categories</VisuallyHiddenH2>
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
        </S.ProductCategorySection>
        <S.MidSection role="region" aria-labelledby="casual-keyboards-label">
          <VisuallyHiddenH2 id="casual-keyboards-label">Casual and Gaming Keyboards</VisuallyHiddenH2>
          <S.MidSectionFirstImageWrapper href="/keyboards?variants=casual" aria-label="go to casual keyboards page">
            <S.MidSectionText>
              <S.H2>Casual keyboards</S.H2>
              <S.Paragraph>keyboards for casusal typers</S.Paragraph>
            </S.MidSectionText>
            <div style={{ width: '100%' }}>
              <Image
                alt="five keyboards next to each other"
                src="/assets/images/keyboard.png"
                priority
                layout="responsive"
                width={800}
                height={600}
              />
            </div>
          </S.MidSectionFirstImageWrapper>
          <S.MidSectionSecondImageWrapper href="/keyboards?variants=gaming" aria-label="go to gaming keyboards page">
            <S.MidSectionText>
              <S.H2>Gaming keyboards</S.H2>
              <S.Paragraph>keyboards for hardcore gamers</S.Paragraph>
            </S.MidSectionText>
            <div style={{ width: '100%' }}>
              <Image
                alt="black keyboard with purple lights on"
                src="/assets/images/keyboard2.png"
                priority
                layout="responsive"
                width={800}
                height={600}
              />
            </div>
          </S.MidSectionSecondImageWrapper>
        </S.MidSection>
        <Footer />
      </S.Main>
    </>
  );
}

export default HomePage;
