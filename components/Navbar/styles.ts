import { GradientText, LineOnHover, RoundButton } from '@utils/style-utils';
import styled, { css } from 'styled-components';

const ListStyles = css`
  font-size: clamp(1rem, 2vw, 1.2rem);
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0;
  gap: 1rem;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
`;

export const MenuToggleButton = styled(RoundButton)`
  z-index: 9999;
  position: absolute;
  right: 25px;
  top: 1rem;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav<{ isExpanded: boolean }>`
  display: flex;
  max-height: 70px;
  min-height: 50px;
  padding: 0 2rem;
  background: hsl(0 0% 0% / 100%);
  min-height: 100vh;
  padding: 4rem;
  justify-content: flex-start;
  inset: 0 0 0 30%;
  position: absolute;
  visibility: ${({ isExpanded }) => (isExpanded ? 'visible' : 'collapse')};
  transform: ${({ isExpanded }) => (isExpanded ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease, visibility 0.3s ease-in-out;

  @supports (backdrop-filter: blur(10px)) {
    background: hsl(0 0% 0% / 20%);
    backdrop-filter: blur(10px);
  }

  @media (min-width: 768px) {
    visibility: visible;
    min-height: auto;
    position: relative;
    inset: unset;
    padding: 0rem 1rem;
    transform: translateX(0);
  }
`;

export const LogoList = styled.ul`
  ${ListStyles};
  justify-content: flex-start;
  width: auto;
  display: none;

  li {
    &:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

export const Logo = styled.a`
  ${GradientText};
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
  font-weight: 600;
  font-size: clamp(1rem, 2vw, 1.4rem);
`;

export const Ul = styled.ul`
  ${ListStyles};
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: flex-end;
    flex-direction: row;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SignInLink = styled.a`
  font-weight: 600;
  color: white;
  ${LineOnHover};

  &:before {
    top: 25px;
  }
`;
