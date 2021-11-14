import styled from 'styled-components';

export const CardBackdrop = styled.div`
  position: fixed;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  background: transparent;
  inset: 0;
`;

export const CartContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 20%;
  background: red;
`;
