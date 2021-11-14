import * as React from 'react';
import { createPortal } from 'react-dom';
import { CardBackdrop, CartContainer } from './styles';
import { useCart } from './useCart';

function CartRoot() {
  const { open, setOpen } = useCart();

  const [mounted, setMounted] = React.useState(false);

  const cartRef = React.useRef<null | HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const closeCart = (e: React.BaseSyntheticEvent) => {
    if (!cartRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return open && mounted
    ? createPortal(
        <CardBackdrop onClick={closeCart}>
          <CartContainer ref={cartRef}>
            <span>your cart items</span>
          </CartContainer>
        </CardBackdrop>,
        document.getElementById('portal') || null
      )
    : null;
}

export default CartRoot;
