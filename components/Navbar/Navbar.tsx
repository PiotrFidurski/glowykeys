import * as React from 'react';
import Cart from '../../public/assets/vector/cart.svg';
import Logo from '../../public/assets/vector/logo.svg';
import { Li, LogoArea, LogoText, Nav, Ul } from './styles';

function Navbar() {
  return (
    <Nav>
      <LogoArea>
        <Logo fill="white" width="45" height="45" />
        <LogoText>glowykeys</LogoText>
      </LogoArea>
      <Ul>
        <Li>Sign in</Li>
        <Li>
          <Cart fill="white" width="30" height="30" />
        </Li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
