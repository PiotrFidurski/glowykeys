import * as React from 'react';
import Cart from '../../public/assets/vector/cart.svg';
import Logo from '../../public/assets/vector/logo.svg';
import { Li, Nav, Ul } from './styles';

function Navbar() {
  return (
    <Nav>
      <Logo fill="white" width="45" height="45" />
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
