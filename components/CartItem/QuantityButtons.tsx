import { decrementQty, incrementQty } from '@components/Cart/CartContext';
import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import { Product } from '@utils/types';
import * as React from 'react';
import Delete from '../../public/assets/vector/delete.svg';
import Minus from '../../public/assets/vector/minus.svg';
import Plus from '../../public/assets/vector/plus.svg';
import * as S from './styles';

interface Props {
  product: Product;
}

function QuantityButtons({ product }: Props) {
  const {
    state: { items },
    dispatch,
  } = useCart();

  const handleIncrement = () => {
    incrementQty({ dispatch, updates: { items, product } });
  };

  const handleDecrement = () => {
    if (product.qty > 0) {
      decrementQty({ dispatch, updates: { items, product } });
    } else {
      dispatch({ type: actionTypes.removeItem, payload: product });
    }
  };

  return (
    <S.QuantityContainer>
      <S.QuantityButton type="button" onClick={handleIncrement} aria-label={`add one more ${product.name} to cart`}>
        <Plus width="15" height="15" fill="white" />
      </S.QuantityButton>
      <S.QTY tabIndex={-1} aria-label="Quantity" inputMode="numeric" readOnly value={product.qty} />
      <S.QuantityButton
        reverseBorderRadius
        type="button"
        onClick={handleDecrement}
        aria-label={product.qty > 0 ? `remove one ${product.name} from cart` : `remove ${product.name} from cart`}
      >
        {product.qty === 0 ? (
          <Delete width="15" height="15" fill="white" />
        ) : (
          <Minus width="15" height="15" fill="white" />
        )}
      </S.QuantityButton>
    </S.QuantityContainer>
  );
}

export default QuantityButtons;
