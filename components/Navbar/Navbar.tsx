import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import { Button } from '@utils/style-utils';
import Link from 'next/link';
import * as React from 'react';
import Cart from '../../public/assets/vector/cart.svg';
import LogoIcon from '../../public/assets/vector/logo.svg';
import { Li, Logo, LogoSectionList, Nav, SignInLink, Ul } from './styles';

function Navbar() {
  const { dispatch } = useCart();
  return (
    <Nav>
      <LogoSectionList>
        <Li>
          <Link href="/" passHref>
            <Logo>
              <LogoIcon fill="white" width="35" height="35" />
              glowykeys
            </Logo>
          </Link>
        </Li>
      </LogoSectionList>
      <Ul>
        <Li>
          <Link href="/signin" passHref>
            <SignInLink>Sign in</SignInLink>
          </Link>
        </Li>
        <Li>
          <Button onClick={() => dispatch({ type: actionTypes.openMenu })} type="button" aria-label="open cart menu">
            <Cart fill="white" width="25" height="25" />
          </Button>
        </Li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
