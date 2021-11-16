import { GradientText, LineOnHover } from '@utils/style-utils';
import styled, { css } from 'styled-components';

const ListStyles = css`
  font-size: clamp(1rem, 2vw, 1.4rem);
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0;
  gap: 1rem;
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  background: ${({ theme: { background } }) => background.secondary};
  align-items: center;
  width: 100%;
  max-height: 70px;
  min-height: 50px;
  padding: 0 2rem;
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
  color: white;
  ${LineOnHover};

  &:before {
    top: 30px;
  }
`;
