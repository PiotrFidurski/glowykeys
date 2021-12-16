import CartItem from '@components/CartItem/CartItem';
import { createCheckoutSession } from '@utils/createCheckoutSession';
import { getSubTotalPrice } from '@utils/getTotalPrice';
import { Hr, RoundButton, SquareButton } from '@utils/style-utils';
import { useFormatCurrency } from '@utils/useFormatCurrency';
import { motion } from 'framer-motion';
import * as React from 'react';
import Close from '../../public/assets/vector/close.svg';
import {
  CartContainer,
  CenterContainer,
  CheckoutContainer,
  CheckoutWrapper,
  H2,
  Header,
  ItemListContainer,
  Paragraph,
} from './styles';
import { actionTypes } from './types';
import { useCart } from './useCart';

function Cart() {
  const {
    state: { items, open },
    dispatch,
  } = useCart();

  const subtotal = getSubTotalPrice(items);

  const { priceInDollars } = useFormatCurrency(subtotal);

  const handleClick = () => {
    if (items.length) {
      createCheckoutSession(items);
    } else {
      dispatch({ type: actionTypes.closeMenu });
    }
  };

  return (
    <CartContainer>
      <Header role="heading" aria-labelledby="cart-heading">
        <H2 id="cart-heading">Shopping Cart with {items.length} items</H2>
        <RoundButton
          aria-expanded={open ? 'true' : 'false'}
          aria-label="close cart"
          onClick={() => dispatch({ type: actionTypes.closeMenu })}
        >
          <Close width="25" height="25" fill="white" />
        </RoundButton>
      </Header>
      <ItemListContainer>
        {items.map((item) => (
          <CartItem product={item} key={item.id} />
        ))}
      </ItemListContainer>
      <CheckoutContainer role="region" aria-label="checkout" as={motion.section} layout>
        {items.length ? (
          <CheckoutWrapper>
            <Paragraph>Subtotal</Paragraph>
            <Paragraph>{priceInDollars}</Paragraph>
          </CheckoutWrapper>
        ) : (
          <CenterContainer>
            <Paragraph>Looks like your cart is empty!</Paragraph>
          </CenterContainer>
        )}
        <Hr />
      </CheckoutContainer>
      <CenterContainer as={motion.div} layout>
        <SquareButton aria-label={items.length ? 'Go to Checkout' : 'Continue Shopping'} onClick={handleClick}>
          {items.length ? 'Checkout' : 'Shop Now'}
        </SquareButton>
      </CenterContainer>
    </CartContainer>
  );
}

export default Cart;
