import { decrementQty, incrementQty } from '@components/Cart/CartContext';
import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import { Button } from '@utils/style-utils';
import { Product } from 'data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';
import Delete from '../../public/assets/vector/delete.svg';
import Minus from '../../public/assets/vector/minus.svg';
import Plus from '../../public/assets/vector/plus.svg';
import * as S from './styles';

interface Props {
  product: Product;
}

function CartItem({ product }: Props) {
  const {
    state: { items },
    dispatch,
  } = useCart();

  return (
    <S.Container aria-label="cart item" as={motion.article} layout>
      <S.Wrapper>
        <S.ImageWrapper>
          <Image src={product.image.thumbnail} layout="fill" objectFit="contain" />
        </S.ImageWrapper>
        <S.Details>
          <S.H2>{product.name}</S.H2>
          <S.Paragraph>{(product.price * product.qty).toFixed(2)}$</S.Paragraph>
          <S.Quantity>
            <Button
              type="button"
              onClick={() => incrementQty({ dispatch, updates: { items, product } })}
              aria-label="add quantity"
            >
              <Plus width="25" height="25" fill="white" />
            </Button>
            <S.QTY>{product.qty}</S.QTY>
            <Button
              transformOn={product.qty === 0}
              type="button"
              onClick={() => {
                if (product.qty > 0) {
                  decrementQty({ dispatch, updates: { items, product } });
                } else {
                  dispatch({ type: actionTypes.removeItem, payload: product });
                }
              }}
              aria-label={product.qty > 0 ? 'subtract quantity' : 'remove item'}
            >
              {product.qty === 0 ? (
                <Delete width="25" height="25" fill="white" />
              ) : (
                <Minus width="25" height="25" fill="white" />
              )}
            </Button>
          </S.Quantity>
        </S.Details>
      </S.Wrapper>
      <Button
        type="button"
        aria-label="remove item"
        onClick={() => dispatch({ type: actionTypes.removeItem, payload: product })}
      >
        <Delete width="25" height="25" fill="white" />
      </Button>
    </S.Container>
  );
}

export default CartItem;
