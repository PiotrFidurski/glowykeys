import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import * as S from '@styled/pages/HomePageStyles';
import { SquareButton, VisuallyHiddenH2 } from '@utils/style-utils';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Find the perfect keyboard for you</title>
        <meta name="description" content="shop for the best keyboards" />
      </Head>
      <Navbar />
      <S.Main>
        <S.Header role="heading" aria-describedby="main-heading">
          <S.HeaderSection>
            <S.H1 id="main-heading">Hello, Get the best keyboard possible fitting to your needs.</S.H1>
            <S.Paragraph>
              A quality keyboard is vital for both work and play. Whether you’re a mechanical purist, a couch gamer, a
              freak for extra functions or someone who wants it all – we’ve got you covered.
            </S.Paragraph>
          </S.HeaderSection>
          <SquareButton type="button" onClick={() => router.push('/products')}>
            View Products
          </SquareButton>
        </S.Header>
        <S.ProductCategorySection role="region" aria-labelledby="product-category-label">
          <VisuallyHiddenH2 id="product-category-label">Product Categories</VisuallyHiddenH2>
          <S.Nav>
            <Link href="/keyboards" passHref>
              <S.KeyboardsCategory aria-label="go to keyboards page">
                <S.H2>Keyboards</S.H2>
                <Image
                  src="/assets/images/blueish-keyboard.png"
                  alt="black keyboard with water drops on it"
                  priority
                  layout="fill"
                  objectFit="cover"
                />
              </S.KeyboardsCategory>
            </Link>
            <Link href="/keycaps" passHref>
              <S.KeyCapsCategory aria-label="go to keycaps page">
                <S.H2>Keycaps</S.H2>
                <Image
                  alt="black keycap with hammer stuck to it"
                  src="/assets/images/keycaps.webp"
                  priority
                  layout="fill"
                  objectFit="cover"
                />
              </S.KeyCapsCategory>
            </Link>
            <Link href="/switches" passHref>
              <S.SwitchesCategory aria-label="go to switches page">
                <S.H2>Switches</S.H2>
                <Image
                  alt="colorful keyboard switches in a box"
                  src="/assets/images/switches.webp"
                  priority
                  layout="fill"
                  objectFit="cover"
                />
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
            <Image
              alt="five keyboards next to each other"
              src="/assets/images/keyboard.png"
              priority
              layout="fill"
              objectFit="cover"
            />
          </S.MidSectionFirstImageWrapper>
          <S.MidSectionSecondImageWrapper href="/keyboards?variants=gaming" aria-label="go to gaming keyboards page">
            <S.MidSectionText>
              <S.H2>Gaming keyboards</S.H2>
              <S.Paragraph>keyboards for hardcore gamers</S.Paragraph>
            </S.MidSectionText>
            <Image
              alt="black keyboard with purple lights on"
              src="/assets/images/keyboard2.png"
              priority
              layout="fill"
              objectFit="cover"
            />
          </S.MidSectionSecondImageWrapper>
        </S.MidSection>
        <Footer />
      </S.Main>
    </>
  );
}

export default HomePage;
