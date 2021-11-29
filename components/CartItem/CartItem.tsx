import { decrementQty, incrementQty } from '@components/Cart/CartContext';
import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import { RoundButton } from '@utils/style-utils';
import { Product } from '@utils/types';
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
    <S.Article
      id={`${product.name} article`}
      aria-label={`${product.name} cart item`}
      role="article"
      as={motion.article}
      layout
    >
      <S.Container>
        <S.ImageWrapper>
          <Image src={product.image.thumbnail} layout="fill" objectFit="contain" />
        </S.ImageWrapper>
        <S.DetailsContainer>
          <S.A href="/">{product.name}</S.A>
          <S.Paragraph>price: {(product.price * product.qty).toFixed(2)}$</S.Paragraph>
          <S.QuantityContainer>
            <RoundButton
              type="button"
              onClick={() => incrementQty({ dispatch, updates: { items, product } })}
              aria-label={`add one more ${product.name} to cart`}
            >
              <Plus width="25" height="25" fill="white" />
            </RoundButton>
            <S.QTY aria-label="Quantity" inputMode="numeric" readOnly value={product.qty} />
            <RoundButton
              transformOn={product.qty === 0}
              type="button"
              onClick={() => {
                if (product.qty > 0) {
                  decrementQty({ dispatch, updates: { items, product } });
                } else {
                  dispatch({ type: actionTypes.removeItem, payload: product });
                }
              }}
              aria-label={product.qty > 0 ? `remove one ${product.name} from cart` : `remove ${product.name} from cart`}
            >
              {product.qty === 0 ? (
                <Delete width="25" height="25" fill="white" />
              ) : (
                <Minus width="25" height="25" fill="white" />
              )}
            </RoundButton>
          </S.QuantityContainer>
        </S.DetailsContainer>
      </S.Container>
      <RoundButton
        type="button"
        aria-label={`remove ${product.name} from cart`}
        onClick={() => dispatch({ type: actionTypes.removeItem, payload: product })}
      >
        <Delete width="25" height="25" fill="white" />
      </RoundButton>
    </S.Article>
  );
}

export default CartItem;
