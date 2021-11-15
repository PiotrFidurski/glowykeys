import { AnimatePresence, motion } from 'framer-motion';
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

  const [mounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    const currentElement = document.activeElement as HTMLElement;

    if (open) cartContainer.current.focus();

    return () => {
      currentElement.focus();
    };
  }, [open]);

  const closeCart = (e: React.BaseSyntheticEvent) => {
    if (!cartContainer.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return mounted
    ? createPortal(
        <AnimatePresence>
          {open ? (
            <CardBackdrop aria-label="Close cart" onClick={closeCart}>
              <CartContainer
                as={motion.div}
                initial={{ opacity: 0, x: 1000, scale: 0.3 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 200, scale: 0.5 }}
                tabIndex={0}
                ref={cartContainer}
                aria-label="cart"
              >
                {cartUi}
              </CartContainer>
            </CardBackdrop>
          ) : null}
        </AnimatePresence>,
        document.getElementById('portal') || document.createElement('div')
      )
    : null;
}

export default CartRoot;
