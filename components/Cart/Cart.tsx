import CartItem from '@components/CartItem/CartItem';
import { Button } from '@utils/style-utils';
import { data } from 'data';
import * as React from 'react';
import Close from '../../public/assets/vector/close.svg';
import { Checkout, H2, Header, HR, Items, Paragraph, Wrapper } from './styles';
import { useCart } from './useCart';

function Cart() {
  const { setOpen } = useCart();
  return (
    <Wrapper>
      <Header>
        <H2>Shopping Cart (2 items)</H2>
        <Button aria-label="close" onClick={() => setOpen(false)}>
          <Close width="25" height="25" fill="white" />
        </Button>
      </Header>
      <Items aria-label="cart items list">
        {data.splice(0, 2).map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </Items>
      <Checkout>
        <HR />
        <Paragraph>Total $59.99</Paragraph>
        <HR />
      </Checkout>
    </Wrapper>
  );
}

export default Cart;
