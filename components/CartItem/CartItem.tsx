import { Button } from '@utils/style-utils';
import { Product } from 'data';
import Image from 'next/image';
import * as React from 'react';
import Delete from '../../public/assets/vector/delete.svg';
import Minus from '../../public/assets/vector/minus.svg';
import Plus from '../../public/assets/vector/plus.svg';
import * as S from './styles';

interface Props {
  item: Product;
}

function CartItem({ item }: Props) {
  return (
    <S.Container aria-label="cart item">
      <S.Wrapper>
        <S.ImageWrapper>
          <Image src={item.image.thumbnail} layout="fill" objectFit="contain" />
        </S.ImageWrapper>
        <S.Details>
          <S.H2>{item.name}</S.H2>
          <S.Paragraph>{item.price}$</S.Paragraph>
          <S.Quantity>
            <Button type="button" aria-label="add quantity">
              <Plus width="25" height="25" fill="white" />
            </Button>
            <S.QTY>QTY</S.QTY>
            <Button type="button" aria-label="subtract quantity">
              <Minus width="25" height="25" fill="white" />
            </Button>
          </S.Quantity>
        </S.Details>
      </S.Wrapper>
      <Button type="button" aria-label="remove item">
        <Delete width="25" height="25" fill="white" />
      </Button>
    </S.Container>
  );
}

export default CartItem;
