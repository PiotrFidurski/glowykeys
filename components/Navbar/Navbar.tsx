import Link from 'next/link';
import * as React from 'react';
import Cart from '../../public/assets/vector/cart.svg';
import Logo from '../../public/assets/vector/logo.svg';
import { Li, LogoSectionList, LogoText, Nav, Ul } from './styles';

function Navbar() {
  return (
    <Nav>
      <LogoSectionList>
        <Li>
          <Link href="/" passHref>
            <LogoText>
              <Logo fill="white" width="35" height="35" />
              glowykeys
            </LogoText>
          </Link>
        </Li>
      </LogoSectionList>
      <Ul>
        <Li>
          <button type="button">Sign in</button>
        </Li>
        <Li>
          <Cart fill="white" width="30" height="30" />
        </Li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
