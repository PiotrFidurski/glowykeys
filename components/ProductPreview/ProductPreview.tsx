import Image from 'next/image';
import * as React from 'react';
import * as S from './styles';

function ProductPreview() {
  return (
    <S.PreviewSection role="region" aria-label="hot sales product preview">
      <S.Preview>
        <S.ImageWrapper>
          <Image
            src="/assets/images/gmmk-pro.png"
            priority
            quality={100}
            layout="responsive"
            width="800"
            height="600"
          />
        </S.ImageWrapper>
        <S.ButtonContainer>
          <button type="button">PREV</button>
          <S.ButtonSeparator />
          <button type="button">NEXT</button>
        </S.ButtonContainer>
      </S.Preview>
      <S.HotSales>
        <h2>HOT SALES</h2>
        <p>GMMK Pro might be the option you’re looking for.</p>
        <p>299.99$</p>
      </S.HotSales>
      <S.Customers>
        <h1>356</h1>
        <p>customers</p>
      </S.Customers>
      <S.Description>
        <p>
          For typing, the GMMK Pro is a dream. Made with the typing experience in mind, this keyboard offers satisfying
          sound, feel, and aesthetics.
        </p>
      </S.Description>
    </S.PreviewSection>
  );
}

export default ProductPreview;
