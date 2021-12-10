import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import { slugify } from '@utils/slugify';
import { Hr, RoundButton, SmallImageWrapper } from '@utils/style-utils';
import { Product } from '@utils/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import Delete from '../../public/assets/vector/delete.svg';
import QuantityButtons from './QuantityButtons';
import * as S from './styles';

interface Props {
  product: Product;
}

function CartItem({ product }: Props) {
  const { dispatch } = useCart();

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
            <Link href={`/${product.type}s/${slugify(product.name)}`} passHref prefetch={false}>
              <S.A onClick={() => dispatch({ type: actionTypes.closeMenu })}>{product.name}</S.A>
            </Link>
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
            <QuantityButtons product={product} />
            <S.Paragraph>{(product.price * product.qty).toFixed(2)}$</S.Paragraph>
          </S.DetailsContentWrapper>
        </S.DetailsContainer>
      </S.Container>
      <Hr />
    </S.Article>
  );
}

export default CartItem;
