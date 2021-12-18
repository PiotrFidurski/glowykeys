import { ImageWrapper, VisuallyHiddenH1 } from '@utils/style-utils';
import Image from 'next/image';
import * as React from 'react';
import * as S from './styles';

function HotSales() {
  return (
    <S.PreviewSection role="region" aria-labelledby="hot-sales-preview">
      <VisuallyHiddenH1 id="hot-sales-preview">Hot Sales Product Preview</VisuallyHiddenH1>
      <S.Container>
        <ImageWrapper>
          <Image
            src="/assets/images/saviotempest.png"
            priority
            quality={100}
            alt="black mechanical keyboard with green lights"
            blurDataURL="/assets/images/saviotempest.png"
            placeholder="blur"
            sizes="40vw"
            layout="responsive"
            width={800}
            height={600}
          />
        </ImageWrapper>
        <S.ButtonContainer>
          <button type="button" aria-label="go to previous product">
            PREV
          </button>
          <S.ButtonSeparator />
          <button type="button" aria-label="go to next product">
            NEXT
          </button>
        </S.ButtonContainer>
      </S.Container>
      <S.HotSalesSection role="region" aria-labelledby="bestseller">
        <h2 id="bestseller">Bestseller</h2>
        <p>Cooler Master sk620 might be the option you&apos;re looking for.</p>
        <S.BuyNowContainer>
          <p>299.99$</p>
          <button type="button">BUY NOW</button>
        </S.BuyNowContainer>
      </S.HotSalesSection>
      <S.CustomersSection role="region" aria-label="customers">
        <h2>356</h2>
        <p>customers</p>
      </S.CustomersSection>
      <S.DescriptionContainer>
        <p>
          For typing, the sk620 is a dream. Made with the typing experience in mind, this keyboard offers satisfying
          sound, feel, and aesthetics.
        </p>
      </S.DescriptionContainer>
    </S.PreviewSection>
  );
}

export default HotSales;
