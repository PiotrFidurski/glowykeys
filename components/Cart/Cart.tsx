import CartItem from '@components/CartItem/CartItem';
import { getSubTotalPrice } from '@utils/getTotalPrice';
import { RoundButton } from '@utils/style-utils';
import { motion } from 'framer-motion';
import * as React from 'react';
import Close from '../../public/assets/vector/close.svg';
import { CheckoutSection, H2, Header, HR, ItemsSection, Paragraph, Wrapper } from './styles';
import { actionTypes } from './types';
import { useCart } from './useCart';

function Cart() {
  const {
    state: { items },
    dispatch,
  } = useCart();

  const subtotal = getSubTotalPrice(items);

  return (
    <Wrapper>
      <Header role="heading" aria-label={`Shopping cart with ${items.length} items`}>
        <H2>Shopping Cart ({items.length} items)</H2>
        <RoundButton aria-label="close menu" onClick={() => dispatch({ type: actionTypes.closeMenu })}>
          <Close width="25" height="25" fill="white" />
        </RoundButton>
      </Header>
      <ItemsSection role="region" aria-label="items list">
        {items.map((item) => (
          <CartItem product={item} key={item.id} />
        ))}
      </ItemsSection>
      <CheckoutSection role="region" aria-label="checkout" as={motion.section} layout>
        <HR />
        <Paragraph>Subtotal $ {subtotal.toFixed(2)}</Paragraph>
        <HR />
      </CheckoutSection>
    </Wrapper>
  );
}

export default Cart;
