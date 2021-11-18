import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { backgroundAnimations, menuAnimations } from './animations';
import { CardBackdrop, CartDialog } from './styles';
import { actionTypes } from './types';
import { useCart } from './useCart';

interface Props {
  cartUi: React.ReactElement;
}
function CartRoot({ cartUi }: Props) {
  const {
    state: { open },
    dispatch,
  } = useCart();

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
      dispatch({ type: actionTypes.closeMenu });
    }
  };

  return mounted
    ? createPortal(
        <AnimatePresence>
          {open ? (
            <CardBackdrop as={motion.div} {...backgroundAnimations} aria-label="Close cart" onClick={closeCart}>
              <CartDialog
                as={motion.div}
                role="dialog"
                tabIndex={0}
                {...menuAnimations}
                ref={cartContainer}
                aria-label="cart menu"
              >
                {cartUi}
              </CartDialog>
            </CardBackdrop>
          ) : null}
        </AnimatePresence>,
        document.getElementById('portal') || document.createElement('div')
      )
    : null;
}

export default CartRoot;
