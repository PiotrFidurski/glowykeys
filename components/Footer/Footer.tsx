import * as React from 'react';
import { A, About, Help, StyledFooter } from './styles';

function Footer() {
  return (
    <StyledFooter>
      <Help>
        <A>Frequently Asked Questions</A>
        <A>Reviews</A>
        <A>My Account</A>
        <A>Contact Us</A>
      </Help>
      <About>
        <A>Press</A>
        <A>Our Story</A>
        <A>Products</A>
        <A>Technology</A>
      </About>
    </StyledFooter>
  );
}

export default Footer;
