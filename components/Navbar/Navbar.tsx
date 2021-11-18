import { actionTypes } from '@components/Cart/types';
import { useCart } from '@components/Cart/useCart';
import { Button } from '@utils/style-utils';
import Link from 'next/link';
import * as React from 'react';
import Cart from '../../public/assets/vector/cart.svg';
import LogoIcon from '../../public/assets/vector/logo.svg';
import { Header, Li, Logo, LogoSectionList, Nav, SignInLink, Ul } from './styles';

function Navbar() {
  const { dispatch } = useCart();
  return (
    <Header>
      <Nav>
        <LogoSectionList aria-hidden="true">
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
            <Button aria-label="open cart menu" onClick={() => dispatch({ type: actionTypes.openMenu })} type="button">
              <Cart fill="white" width="25" height="25" />
            </Button>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
}

export default Navbar;
