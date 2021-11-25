import { GradientText, LineOnHover } from '@utils/style-utils';
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

export const Nav = styled.nav`
  display: flex;
  max-height: 70px;
  min-height: 50px;
  padding: 0 2rem;
  background: ${({ theme: { background } }) => background.primary};
  align-items: center;
`;

export const LogoSectionList = styled.ul`
  ${ListStyles};
  justify-content: flex-start;
  width: auto;

  li {
    &:hover {
      cursor: pointer;
    }
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
  justify-content: flex-end;
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
    top: 30px;
  }
`;
