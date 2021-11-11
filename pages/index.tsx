import Navbar from '@components/Navbar/Navbar';
import {
  A,
  Article,
  Button,
  Credits,
  Footer,
  H1,
  HeaderSection,
  KeyboardsCategory,
  KeyCapsCategory,
  Links,
  Main,
  MidSection,
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
      <title>Find the best keyboards</title>
      <meta name="description" content="shop for the best keyboards around" />
    </Head>
    <Navbar />
    <Main>
      <Article>
        <HeaderSection>
          <H1>Hello, Almost before we knew it, we had left the ground.</H1>
          <Paragraph>Almost before we knew it, we had left the ground.</Paragraph>
        </HeaderSection>
        <Button>View Products</Button>
      </Article>

      <ProductCategorySection>
        <KeyboardsCategory>
          <H1>Keyboards</H1>
          <Image src="/assets/images/blueish-keyboard.png" layout="fill" objectFit="cover" />
        </KeyboardsCategory>
        <KeyCapsCategory>
          <H1>Keycaps</H1>
          <Image src="/assets/images/blueish-keyboard.png" layout="fill" objectFit="cover" />
        </KeyCapsCategory>
        <SwitchesCategory>
          <H1>Switches</H1>
          <Image src="/assets/images/blueish-keyboard.png" layout="fill" objectFit="cover" />
        </SwitchesCategory>
      </ProductCategorySection>
      <MidSection>
        <MidSectionFirstImageWrapper>
          <H1>Casual keyboards</H1>
          <Paragraph>get your own</Paragraph>
          <Image src="/assets/images/keyboard.png" priority layout="fill" objectFit="cover" />
        </MidSectionFirstImageWrapper>
        <MidSectionSecondImageWrapper>
          <H1>Gaming keyboards</H1>
          <Paragraph>get your own</Paragraph>
          <Image src="/assets/images/keyboard2.png" priority layout="fill" objectFit="cover" />
        </MidSectionSecondImageWrapper>
      </MidSection>
      <Footer>
        <Links>
          <A>somelink</A>
          <A>somelink</A>
          <A>somelink</A>
          <A>somelink</A>
        </Links>
        <Credits>
          <A>somelink</A>
          <A>somelink</A>
          <A>somelink</A>
          <A>somelink</A>
        </Credits>
      </Footer>
    </Main>
  </div>
);

export default HomePage;
