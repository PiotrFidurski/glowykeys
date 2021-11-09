import Navbar from '@components/Navbar/Navbar';
import {
  Article,
  Button,
  H1,
  HeaderSection,
  ImageWrapper,
  KeyboardsCategory,
  KeyCapsCategory,
  Main,
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
      <div style={{ position: 'relative', marginBottom: '2rem' }}>
        <Article>
          <HeaderSection>
            <H1>Hello, Almost before we knew it, we had left the ground.</H1>
            <Paragraph>Almost before we knew it, we had left the ground.</Paragraph>
          </HeaderSection>
          <Button>View Products</Button>
        </Article>
        <Image
          src="/assets/images/blueish-keyboard.png"
          alt="a black mechanical keyboard with red and blue lights"
          priority
          layout="responsive"
          width="1920"
          height="900"
        />
      </div>
      <ProductCategorySection>
        <KeyboardsCategory>
          <ImageWrapper>
            <Image src="/assets/images/blue-keyboard.png" layout="responsive" width="600" height="400" />
          </ImageWrapper>
        </KeyboardsCategory>
        <KeyCapsCategory>
          <ImageWrapper>
            <Image src="/assets/images/blue-keyboard.png" layout="responsive" width="600" height="400" />
          </ImageWrapper>
        </KeyCapsCategory>
        <SwitchesCategory>
          <ImageWrapper>
            <Image src="/assets/images/blue-keyboard.png" layout="responsive" width="600" height="400" />
          </ImageWrapper>
        </SwitchesCategory>
      </ProductCategorySection>
    </Main>
  </div>
);

export default HomePage;
