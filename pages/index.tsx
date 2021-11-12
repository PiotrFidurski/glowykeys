import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import {
  Button,
  H1,
  Header,
  HeaderSection,
  KeyboardsCategory,
  KeyCapsCategory,
  Main,
  MidSection,
  MidSectionFirstImageWrapper,
  MidSectionSecondImageWrapper,
  MidSectionText,
  Paragraph,
  ProductCategorySection,
  SwitchesCategory,
} from '@styled/pages/HomePageStyles';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
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
          <Button onClick={() => router.push('/products')}>View Products</Button>
        </Header>
        <ProductCategorySection>
          <Link href="/keyboards" passHref>
            <KeyboardsCategory>
              <H1>Keyboards</H1>
              <Image src="/assets/images/blueish-keyboard.png" priority layout="fill" objectFit="cover" />
            </KeyboardsCategory>
          </Link>
          <Link href="/keycaps" passHref>
            <KeyCapsCategory>
              <H1>Keycaps</H1>
              <Image src="/assets/images/keycaps.webp" priority layout="fill" objectFit="cover" />
            </KeyCapsCategory>
          </Link>
          <Link href="/switches" passHref>
            <SwitchesCategory>
              <H1>Switches</H1>
              <Image src="/assets/images/switches.webp" priority layout="fill" objectFit="cover" />
            </SwitchesCategory>
          </Link>
        </ProductCategorySection>
        <MidSection>
          <MidSectionFirstImageWrapper>
            <MidSectionText>
              <H1>Casual keyboards</H1>
              <Paragraph>keyboards for casusal typers</Paragraph>
            </MidSectionText>
            <Image src="/assets/images/keyboard.png" priority layout="fill" objectFit="cover" />
          </MidSectionFirstImageWrapper>
          <MidSectionSecondImageWrapper>
            <MidSectionText>
              <H1>Gaming keyboards</H1>
              <Paragraph>keyboards for hardcore gamers</Paragraph>
            </MidSectionText>
            <Image src="/assets/images/keyboard2.png" priority layout="fill" objectFit="cover" />
          </MidSectionSecondImageWrapper>
        </MidSection>
        <Footer />
      </Main>
    </div>
  );
};

export default HomePage;
