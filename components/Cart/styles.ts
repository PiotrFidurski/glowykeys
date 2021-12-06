import styled from 'styled-components';

export const CartOverlay = styled.div`
  position: fixed;
  z-index: 10000;
  height: 100vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  inset: 0;
`;

export const CartContent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow-y: auto;
  margin-right: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme: { background } }) => background.secondary};

  @media (min-width: 768px) {
    width: calc(50%);
  }
`;

export const CartContainer = styled.div`
  padding: 1rem;
  color: ${({ theme: { color } }) => color.primary};
`;

export const Header = styled.header`
  display: flex;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
`;

export const ItemListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  text-align: end;
  flex-direction: column;
  justify-content: space-between;
`;

export const CheckoutWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const H2 = styled.h2`
  font-size: clamp(1rem, 2vw, 1.4rem);
`;

export const Paragraph = styled.p`
  letter-spacing: 0.2rem;
`;

export const ItemsAmountContainer = styled.div`
  width: 24px;
  background: ${({ theme: { color } }) => color.highlight};
  border-radius: 9999px;
  aspect-ratio: 1;
  position: absolute;
  top: -6px;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  right: -6px;
  box-shadow: 0px 0px 2px 4px black;
`;
