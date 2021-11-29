import { LineOnHover } from '@utils/style-utils';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${({ theme: { background } }) => background.secondary};
  width: 100%;
  grid-area: footer;
  margin-top: 5rem;
`;

export const Container = styled.div`
  padding: 5rem 3rem;
  min-height: 500px;
  max-width: 1700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, minmax(auto, 1fr));
  grid-template-areas:
    'contact-us contact-us contact-us contact-us contact-us contact-us'
    'help help help help help help'
    'about about about about about about';

  @media (min-width: 768px) {
    grid-template-areas: 'contact-us contact-us help help about about';
  }
`;

export const ContactUsSection = styled.section`
  grid-area: contact-us;
  max-width: 455px;

  h2 {
    color: ${({ theme: { color } }) => color.highlight};
  }

  p {
    line-height: 1.525rem;
  }
`;

export const Nav = styled.nav`
  flex-direction: column;
  display: flex;
  gap: 1rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  align-items: center;
  gap: 2rem;

  svg {
    transition: fill 0.3s ease;

    &:hover {
      cursor: pointer;
      fill: ${({ theme: { color } }) => color.highlight};
    }
  }
`;

export const ContactFormContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0rem;
  border: 3px solid ${({ theme: { color } }) => color.highlight};
  justify-content: stretch;
  min-height: 50px;
  background: ${({ theme: { color } }) => color.highlight};
  margin-bottom: 2rem;

  input {
    background: ${({ theme: { background } }) => background.secondary};
    border: 0;
    padding: 0 1rem;
    outline-color: ${({ theme: { color } }) => color.highlight};
    color: ${({ theme: { color } }) => color.primary};
    min-height: 50px;
    max-width: 350px;
    width: 100%;
  }
`;

export const HelpSection = styled.section`
  grid-area: help;

  h2 {
    color: ${({ theme: { color } }) => color.highlight};
  }

  @media (min-width: 768px) {
    margin-left: 3rem;
  }
`;

export const AboutSection = styled.section`
  grid-area: about;

  h2 {
    color: ${({ theme: { color } }) => color.highlight};
  }

  @media (min-width: 768px) {
    margin-left: 3rem;
  }
`;

export const A = styled.a`
  ${LineOnHover}
  width: fit-content;
  text-decoration: none;
  color: ${({ theme: { color } }) => color.primary};
`;

export const Button = styled.button`
  padding: 1rem;
  background: ${({ theme: { color } }) => color.highlight};
  color: ${({ theme: { color } }) => color.accent};
  border: 1px solid ${({ theme: { color } }) => color.highlight};
  border-left: 0;
  color: ${({ theme: { background } }) => background.secondary};
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  flex-shrink: 1;

  &:hover {
    cursor: pointer;
  }
`;
