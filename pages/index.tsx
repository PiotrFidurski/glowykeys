import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import {
  Button,
  H1,
  H2,
  Header,
  HeaderSection,
  KeyboardsCategory,
  KeyCapsCategory,
  Main,
  MidSection,
  MidSectionFirstImageWrapper,
  MidSectionSecondImageWrapper,
  MidSectionText,
  Nav,
  Paragraph,
  ProductCategorySection,
  SwitchesCategory,
  VisuallyHiddenH2,
} from '@styled/pages/HomePageStyles';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Find the perfect keyboard for you</title>
        <meta name="description" content="shop for the best keyboards" />
      </Head>
      <Navbar />
      <Main>
        <Header>
          <HeaderSection>
            <H1>Hello, Get the best keyboard possible fitting to your needs.</H1>
            <Paragraph>
              A quality keyboard is vital for both work and play. Whether you’re a mechanical purist, a couch gamer, a
              freak for extra functions or someone who wants it all – we’ve got you covered.
            </Paragraph>
          </HeaderSection>
          <Button type="button" onClick={() => router.push('/products')}>
            View Products
          </Button>
        </Header>
        <ProductCategorySection>
          <VisuallyHiddenH2>Product Categories</VisuallyHiddenH2>
          <Nav>
            <Link href="/keyboards" passHref>
              <KeyboardsCategory>
                <H2>Keyboards</H2>
                <Image
                  src="/assets/images/blueish-keyboard.png"
                  alt="black keyboard with water drops on it"
                  priority
                  layout="fill"
                  objectFit="cover"
                />
              </KeyboardsCategory>
            </Link>
            <Link href="/keycaps" passHref>
              <KeyCapsCategory>
                <H2>Keycaps</H2>
                <Image
                  alt="black keycap with hammer stuck to it"
                  src="/assets/images/keycaps.webp"
                  priority
                  layout="fill"
                  objectFit="cover"
                />
              </KeyCapsCategory>
            </Link>
            <Link href="/switches" passHref>
              <SwitchesCategory>
                <H2>Switches</H2>
                <Image
                  alt="colorful keyboard switches in a box"
                  src="/assets/images/switches.webp"
                  priority
                  layout="fill"
                  objectFit="cover"
                />
              </SwitchesCategory>
            </Link>
          </Nav>
        </ProductCategorySection>
        <MidSection>
          <VisuallyHiddenH2>Casual and Gaming Keyboards</VisuallyHiddenH2>
          <MidSectionFirstImageWrapper href="/keyboards?variants=casual">
            <MidSectionText>
              <H2>Casual keyboards</H2>
              <Paragraph>keyboards for casusal typers</Paragraph>
            </MidSectionText>
            <Image
              alt="five keyboards next to each other"
              src="/assets/images/keyboard.png"
              priority
              layout="fill"
              objectFit="cover"
            />
          </MidSectionFirstImageWrapper>
          <MidSectionSecondImageWrapper href="/keyboards?variants=gaming">
            <MidSectionText>
              <H2>Gaming keyboards</H2>
              <Paragraph>keyboards for hardcore gamers</Paragraph>
            </MidSectionText>
            <Image
              alt="black keyboard with purple lights on"
              src="/assets/images/keyboard2.png"
              priority
              layout="fill"
              objectFit="cover"
            />
          </MidSectionSecondImageWrapper>
        </MidSection>
        <Footer />
      </Main>
    </>
  );
};

export default HomePage;
