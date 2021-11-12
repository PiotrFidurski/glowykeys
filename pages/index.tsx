import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import {
  Article,
  Button,
  H1,
  HeaderSection,
  KeyboardsCategory,
  KeyCapsCategory,
  Main,
  MidSection,
  MidSectionArticle,
  MidSectionFirstImageWrapper,
  MidSectionSecondImageWrapper,
  Paragraph,
  ProductCategorySection,
  SwitchesCategory,
} from '@styled/pages/HomePageStyles';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const HomePage: NextPage = () => (
  <div>
    <Head>
      <title>Find the perfect keyboard for you</title>
      <meta name="description" content="shop for the best keyboards" />
    </Head>
    <Navbar />
    <Main>
      <Article>
        <HeaderSection>
          <H1>Hello, Get the best keyboard possible fitting to your needs.</H1>
          <Paragraph>
            A quality keyboard is vital for both work and play. Whether you’re a mechanical purist, a couch gamer, a
            freak for extra functions or someone who wants it all – we’ve got you covered.
          </Paragraph>
        </HeaderSection>
        <Button>View Products</Button>
      </Article>
      <ProductCategorySection>
        <KeyboardsCategory>
          <H1>Keyboards</H1>
          <Image src="/assets/images/blueish-keyboard.png" priority layout="fill" objectFit="cover" />
        </KeyboardsCategory>
        <KeyCapsCategory>
          <H1>Keycaps</H1>
          <Image src="/assets/images/keycaps.webp" priority layout="fill" objectFit="cover" />
        </KeyCapsCategory>
        <SwitchesCategory>
          <H1>Switches</H1>
          <Image src="/assets/images/switches.webp" priority layout="fill" objectFit="cover" />
        </SwitchesCategory>
      </ProductCategorySection>
      <MidSection>
        <MidSectionFirstImageWrapper>
          <MidSectionArticle>
            <H1>Casual keyboards</H1>
            <Paragraph>keyboards for casusal typers</Paragraph>
          </MidSectionArticle>
          <Image src="/assets/images/keyboard.png" priority layout="fill" objectFit="cover" />
        </MidSectionFirstImageWrapper>
        <MidSectionSecondImageWrapper>
          <MidSectionArticle>
            <H1>Gaming keyboards</H1>
            <Paragraph>keyboards for hardcore gamers</Paragraph>
          </MidSectionArticle>
          <Image src="/assets/images/keyboard2.png" priority layout="fill" objectFit="cover" />
        </MidSectionSecondImageWrapper>
      </MidSection>
      <Footer />
    </Main>
  </div>
);

export default HomePage;
