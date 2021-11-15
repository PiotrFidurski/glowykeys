import * as React from 'react';
import { createPortal } from 'react-dom';
import { CardBackdrop, CartContainer } from './styles';
import { useCart } from './useCart';

interface Props {
  cartUi: React.ReactElement;
}
function CartRoot({ cartUi }: Props) {
  const { open, setOpen } = useCart();

  const cartContainer = React.useRef<null | HTMLDivElement>(null);

  const closeCart = (e: React.BaseSyntheticEvent) => {
    if (!cartContainer.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return open
    ? createPortal(
        <CardBackdrop aria-label="Close cart" onClick={closeCart}>
          <CartContainer tabIndex={0} ref={cartContainer} aria-label="cart">
            {cartUi}
          </CartContainer>
        </CardBackdrop>,
        document.getElementById('portal') || null
      )
    : null;
}

export default CartRoot;
