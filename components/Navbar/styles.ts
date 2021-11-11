import styled from 'styled-components';

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

export const LogoArea = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  svg {
    filter: drop-shadow(2px 2px 4px #673ab7);
  }
`;

export const LogoText = styled.span`
  font-weight: 600;
  background: linear-gradient(to left, #e91e63, #673ab7);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-size: clamp(1rem, 2vw, 1.3rem);
`;

export const Ul = styled.ul`
  font-size: clamp(1rem, 2vw, 1.4rem);
  list-style: none;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
`;

export const Li = styled.li``;
