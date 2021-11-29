import { theme } from '@styled/theme';
import { VisuallyHiddenH2 } from '@utils/style-utils';
import * as React from 'react';
import InstagramIcon from '../../public/assets/vector/instagram.svg';
import TwitterIcon from '../../public/assets/vector/twitter.svg';
import YoutubeIcon from '../../public/assets/vector/youtube.svg';
import * as S from './styles';

function Footer() {
  return (
    <S.StyledFooter>
      <S.Container>
        <S.ContactUsSection aria-label="contact us" role="region">
          <h2>Contact Us</h2>
          <p>
            Here at Glowykeys it&apos;s all about keyboards and keyboard things. We share the same passion that you do,
            help us find the product for your needs.
          </p>
          <S.IconsContainer>
            <InstagramIcon fill={theme.color.primary} width="40" height="40" />
            <YoutubeIcon fill={theme.color.primary} width="40" height="40" />
            <TwitterIcon fill={theme.color.primary} width="40" height="40" />
          </S.IconsContainer>
          <S.ContactFormContainer>
            <input type="text" aria-label="enter email address" />
            <S.Button aria-label="submit your information">
              <span>contact</span>
            </S.Button>
          </S.ContactFormContainer>
        </S.ContactUsSection>
        <S.HelpSection role="region" aria-label="Customer Service">
          <VisuallyHiddenH2>Help</VisuallyHiddenH2>
          <S.Nav>
            <h3>Customer Service</h3>
            <S.A href="/">Frequently Asked Questions</S.A>
            <S.A href="/">Reviews</S.A>
            <S.A href="/">My Account</S.A>
            <S.A href="/">Contact Us</S.A>
          </S.Nav>
        </S.HelpSection>
        <S.AboutSection role="region" aria-label="About">
          <VisuallyHiddenH2>Other Links</VisuallyHiddenH2>
          <S.Nav>
            <h3>About</h3>
            <S.A href="/">Press</S.A>
            <S.A href="/">Our Story</S.A>
            <S.A href="/">Products</S.A>
            <S.A href="/">Technology</S.A>
          </S.Nav>
        </S.AboutSection>
      </S.Container>
    </S.StyledFooter>
  );
}

export default Footer;
