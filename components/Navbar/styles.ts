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
  background-color: black;
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
  &:focus-visible {
    background: rgba(255, 255, 255, 0.1);
  }

  li {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  user-select: none;
  font-weight: 600;
  background: linear-gradient(to left, #e91e63, #673ab7);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
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
