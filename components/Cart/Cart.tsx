import CartItem from '@components/CartItem/CartItem';
import { getTotalPrice } from '@utils/getTotalPrice';
import { Button } from '@utils/style-utils';
import { motion } from 'framer-motion';
import * as React from 'react';
import Close from '../../public/assets/vector/close.svg';
import { Checkout, H2, Header, HR, Items, Paragraph, Wrapper } from './styles';
import { actionTypes } from './types';
import { useCart } from './useCart';

function Cart() {
  const {
    state: { items },
    dispatch,
  } = useCart();

  const total = getTotalPrice(items);

  return (
    <Wrapper>
      <Header>
        <H2>Shopping Cart (2 items)</H2>
        <Button aria-label="close" onClick={() => dispatch({ type: actionTypes.closeMenu })}>
          <Close width="25" height="25" fill="white" />
        </Button>
      </Header>
      <Items aria-label="cart items list">
        {items.map((item) => (
          <CartItem product={item} key={item.id} />
        ))}
      </Items>
      <Checkout as={motion.section} layout>
        <HR />
        <Paragraph>Total $ {total.toFixed(2)}</Paragraph>
        <HR />
      </Checkout>
    </Wrapper>
  );
}

export default Cart;
