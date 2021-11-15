import CartItem from '@components/CartItem/CartItem';
import { getTotalPrice } from '@utils/getTotalPrice';
import { Button } from '@utils/style-utils';
import { cartData, Product } from 'data';
import * as React from 'react';
import Close from '../../public/assets/vector/close.svg';
import { Checkout, H2, Header, HR, Items, Paragraph, Wrapper } from './styles';
import { useCart } from './useCart';

function Cart() {
  const { setOpen } = useCart();

  const [items, setItems] = React.useState(cartData);

  const total = getTotalPrice(items);

  const incrementQty = (product: Product) => {
    const index = items.findIndex((item) => item.id === product.id);
    const newItem = { ...product, qty: product.qty + 1 };
    const itemsCopy = [...items];
    itemsCopy[index] = newItem;
    setItems(itemsCopy);
  };

  const decrementQty = (product: Product) => {
    const index = items.findIndex((item) => item.id === product.id);
    const newItem = { ...product, qty: product.qty - 1 };
    const itemsCopy = [...items];
    itemsCopy[index] = newItem;
    setItems(itemsCopy);
  };

  const removeItem = (product: Product) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
  };

  return (
    <Wrapper>
      <Header>
        <H2>Shopping Cart (2 items)</H2>
        <Button aria-label="close" onClick={() => setOpen(false)}>
          <Close width="25" height="25" fill="white" />
        </Button>
      </Header>
      <Items aria-label="cart items list">
        {items.map((item) => (
          <CartItem
            product={item}
            onItemRemove={removeItem}
            onIncrementQty={incrementQty}
            onDecrementQty={decrementQty}
            key={item.id}
          />
        ))}
      </Items>
      <Checkout>
        <HR />
        <Paragraph>Total $ {total.toFixed(2)}</Paragraph>
        <HR />
      </Checkout>
    </Wrapper>
  );
}

export default Cart;
