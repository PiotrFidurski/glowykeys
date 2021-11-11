import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  background-color: red;
  align-items: center;
  width: 100%;
  max-height: 70px;
  min-height: 50px;
  padding: 0 2rem;
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
