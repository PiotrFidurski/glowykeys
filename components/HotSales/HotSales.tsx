import { VisuallyHiddenH2 } from '@utils/style-utils';
import Image from 'next/image';
import * as React from 'react';
import * as S from './styles';

function HotSales() {
  return (
    <S.PreviewSection role="region" aria-label="hot sales product preview">
      <VisuallyHiddenH2>Hot Sales Product Preview</VisuallyHiddenH2>
      <S.Preview>
        <S.ImageWrapper>
          <Image
            src="/assets/images/saviotempest.png"
            priority
            quality={100}
            layout="responsive"
            width="800"
            height="600"
          />
        </S.ImageWrapper>
        <S.ButtonContainer>
          <button type="button" aria-label="go to previous product">
            PREV
          </button>
          <S.ButtonSeparator />
          <button type="button" aria-label="go to next product">
            NEXT
          </button>
        </S.ButtonContainer>
      </S.Preview>
      <S.HotSales role="region" aria-label="hot sales">
        <h2>HOT SALES</h2>
        <p>Cooler Master sk620 might be the option you’re looking for.</p>
        <S.BuyNowWrapper>
          <p>299.99$</p>
          <button type="button">BUY NOW</button>
        </S.BuyNowWrapper>
      </S.HotSales>
      <S.Customers role="region" aria-label="customers">
        <h1>356</h1>
        <p>customers</p>
      </S.Customers>
      <S.Description>
        <p>
          For typing, the sk620 is a dream. Made with the typing experience in mind, this keyboard offers satisfying
          sound, feel, and aesthetics.
        </p>
      </S.Description>
    </S.PreviewSection>
  );
}

export default HotSales;
