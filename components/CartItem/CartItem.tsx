import { decrementQty, incrementQty } from '@components/Cart/CartContext';
import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import { Hr, RoundButton, SmallImageWrapper } from '@utils/style-utils';
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
        <SmallImageWrapper>
          <Image src={product.image.thumbnail} layout="fill" objectFit="contain" />
        </SmallImageWrapper>
        <S.DetailsContainer>
          <S.DetailsHeaderWrapper>
            <S.A href="/">{product.name}</S.A>
            <RoundButton
              style={{ minHeight: '30px', maxWidth: '30px', minWidth: '30px' }}
              type="button"
              aria-label={`remove ${product.name} from cart`}
              onClick={() => dispatch({ type: actionTypes.removeItem, payload: product })}
            >
              <Delete width="15" height="15" fill="white" />
            </RoundButton>
          </S.DetailsHeaderWrapper>
          <S.DetailsContentWrapper>
            <S.QuantityContainer>
              <S.QuantityButton
                type="button"
                onClick={() => incrementQty({ dispatch, updates: { items, product } })}
                aria-label={`add one more ${product.name} to cart`}
              >
                <Plus width="15" height="15" fill="white" />
              </S.QuantityButton>
              <S.QTY tabIndex={-1} aria-label="Quantity" inputMode="numeric" readOnly value={product.qty} />
              <S.QuantityButton
                reverseBorderRadius
                type="button"
                onClick={() => {
                  if (product.qty > 0) {
                    decrementQty({ dispatch, updates: { items, product } });
                  } else {
                    dispatch({ type: actionTypes.removeItem, payload: product });
                  }
                }}
                aria-label={
                  product.qty > 0 ? `remove one ${product.name} from cart` : `remove ${product.name} from cart`
                }
              >
                {product.qty === 0 ? (
                  <Delete width="15" height="15" fill="white" />
                ) : (
                  <Minus width="15" height="15" fill="white" />
                )}
              </S.QuantityButton>
            </S.QuantityContainer>
            <S.Paragraph>{(product.price * product.qty).toFixed(2)}$</S.Paragraph>
          </S.DetailsContentWrapper>
        </S.DetailsContainer>
      </S.Container>
      <Hr />
    </S.Article>
  );
}

export default CartItem;
