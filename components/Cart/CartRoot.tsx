import { theme } from '@styled/theme';
import { AnimatePresence, motion } from 'framer-motion';
import { HTMLMotionComponents } from 'framer-motion/types/render/html/types';
import * as React from 'react';
import Modal from 'react-modal';
import { backgroundAnimations, menuAnimations } from './animations';
import { CartDialog, CartOverlay } from './styles';
import { actionTypes } from './types';
import { useCart } from './useCart';

type MotionComponentPropsWithRef = React.ComponentPropsWithRef<'div' & HTMLMotionComponents>;

const customStyles = {
  content: {
    padding: '0',
    margin: '0px',
    background: theme.background.secondary,
    border: 0,
  },
  overlay: {
    background: 'rgba(255, 255, 255, 0.2)',
  },
};

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
            <CartDialog {...props} as={motion.div} {...menuAnimations} style={{ ...customStyles.content }}>
              {cartUi}
            </CartDialog>
          )}
        />
      ) : null}
    </AnimatePresence>
  );
}

export default CartRoot;
