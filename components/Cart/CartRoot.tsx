import { customStyles } from '@components/Modals/customStyles';
import { AnimatePresence, motion } from 'framer-motion';
import { HTMLMotionComponents } from 'framer-motion/types/render/html/types';
import * as React from 'react';
import Modal from 'react-modal';
import { backgroundAnimations, menuAnimations } from './animations';
import { CartContent, CartOverlay } from './styles';
import { actionTypes } from './types';
import { useCart } from './useCart';

type MotionComponentPropsWithRef = React.ComponentPropsWithRef<'div' & HTMLMotionComponents>;

interface Props {
  cartUi: React.ReactElement;
}

function CartRoot({ cartUi }: Props) {
  const {
    state: { open },
    dispatch,
  } = useCart();

  return (
    <AnimatePresence>
      {open ? (
        <Modal
          shouldCloseOnEsc
          shouldCloseOnOverlayClick
          onRequestClose={() => dispatch({ type: actionTypes.closeMenu })}
          isOpen={open}
          style={customStyles}
          contentLabel="Shopping Cart"
          overlayElement={(props: MotionComponentPropsWithRef, contentElement) => (
            <CartOverlay {...props} as={motion.div} {...backgroundAnimations}>
              {contentElement}
            </CartOverlay>
          )}
          contentElement={(props: MotionComponentPropsWithRef) => (
            <CartContent
              {...props}
              as={motion.div}
              {...menuAnimations}
              style={{ ...customStyles.content }}
              id="cart-dialog"
            >
              {cartUi}
            </CartContent>
          )}
        />
      ) : null}
    </AnimatePresence>
  );
}

export default CartRoot;
