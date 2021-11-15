import { LineOnHover } from '@utils/style-utils';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  grid-area: footer;
  padding: 1rem 2rem;
  background: ${({ theme: { background } }) => background.secondary};
  display: grid;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-areas:
    'help help help help'
    'about about about about';

  @media (min-width: 768px) {
    grid-template-areas: 'help help about about';
  }
`;

export const Help = styled.section`
  grid-area: help;
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const About = styled.section`
  grid-area: about;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const A = styled.a`
  ${LineOnHover}
`;
