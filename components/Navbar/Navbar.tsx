import { ItemsAmountContainer } from '@components/Cart/styles';
import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import SearchModal from '@components/Modals/SearchModal/SearchModal';
import { RoundButton, VisuallyHiddenSpan } from '@utils/style-utils';
import Link from 'next/link';
import * as React from 'react';
import Cart from '../../public/assets/vector/cart.svg';
import Hamburger from '../../public/assets/vector/hamburger.svg';
import LogoIcon from '../../public/assets/vector/logo.svg';
import Loupe from '../../public/assets/vector/loupe.svg';
import { Header, Li, Logo, LogoList, MenuToggleButton, Nav, SignInLink, Ul } from './styles';

function Navbar() {
  const { dispatch } = useCart();
  const {
    state: { items },
  } = useCart();

  const [open, setOpen] = React.useState(false);

  const [expanded, setExpanded] = React.useState(false);

  return (
    <Header>
      <MenuToggleButton
        aria-controls="menubar"
        onClick={() => setExpanded(!expanded)}
        type="button"
        aria-label={expanded ? 'close menu' : 'open menu'}
        aria-expanded={expanded}
      >
        <Hamburger fill="white" width="24" height="24" />
      </MenuToggleButton>
      <Nav aria-label="menubar" id="menubar" isExpanded={expanded}>
        <LogoList aria-hidden="true">
          <Li>
            <Link href="/" passHref aria-label="go to homepage">
              <Logo>
                <LogoIcon fill="white" width="35" height="35" />
                glowykeys
              </Logo>
            </Link>
          </Li>
        </LogoList>
        <Ul>
          <Li>
            <Link href="/signin" passHref>
              <SignInLink>Sign in</SignInLink>
            </Link>
          </Li>
          <Li>
            <RoundButton aria-label="open cart" onClick={() => dispatch({ type: actionTypes.openMenu })} type="button">
              <Cart fill="white" width="25" height="25" />
              {items.length > 0 ? <ItemsAmountContainer>{items.length}</ItemsAmountContainer> : null}
              <VisuallyHiddenSpan aria-atomic="true" aria-live="polite">
                Your cart has {items.length} items
              </VisuallyHiddenSpan>
            </RoundButton>
          </Li>
          <Li>
            <RoundButton onClick={() => setOpen(true)} type="button" aria-label="open search dialog">
              <Loupe width="25" height="25" fill="white" />
            </RoundButton>
          </Li>
        </Ul>
      </Nav>
      {open ? <SearchModal isOpen={open} setOpen={setOpen} /> : null}
    </Header>
  );
}

export default Navbar;
