import styled from 'styled-components';

export const CartOverlay = styled.div`
  position: fixed;
  z-index: 10000;
  height: 100vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  inset: 0;
`;

export const CartDialog = styled.div`
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

export const Wrapper = styled.div`
  padding: 1rem;
  color: ${({ theme: { color } }) => color.primary};
`;

export const Header = styled.header`
  display: flex;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: space-between;
`;

export const ItemsSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-bottom: 2rem;
`;

export const CheckoutSection = styled.section`
  display: flex;
  text-align: end;
  flex-direction: column;
`;

export const H2 = styled.h2`
  font-size: clamp(1rem, 2vw, 1.4rem);
`;

export const Paragraph = styled.p`
  letter-spacing: 0.2rem;
`;

export const HR = styled.hr`
  width: 100%;
`;
