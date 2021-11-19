import styled from 'styled-components';

export const Article = styled.article`
  flex-direction: column;
  max-width: 600px;
  padding-bottom: 1rem;
  border: 1px solid rgb(255 255 255 / 5%);
  margin: 0 auto;
  width: 100%;
  display: flex;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 6px 1px rgb(255 255 255 / 15%);
  }
`;

export const Heading = styled.header`
  padding-left: 1rem;
`;

export const H2 = styled.h2`
  font-size: clamp(0.8rem, 2vw, 1rem);
`;

export const Paragraph = styled.p`
  letter-spacing: 0.1rem;
  font-weight: 600;
  color: ${({ theme: { color } }) => color.highlight};
  font-size: 0.8rem;
  line-height: 1.7rem;
`;

export const ProductImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #090c13;
  min-height: 340px;
  max-width: 100%;
  position: relative;

  img {
    transition: transform 0.3s ease;
  }

  &:hover {
    cursor: pointer;
    img {
      transform: translateY(-1rem);
    }
  }
`;

export const Button = styled.button`
  max-width: 300px;
  position: relative;
  border: 1px solid ${({ theme: { color } }) => color.highlight};
  display: flex;
  width: 100%;
  align-self: center;
  align-items: center;
  padding: 1rem;
  font-weight: 600;
  justify-content: center;
  background: transparent;
  color: ${({ theme: { color } }) => color.primary};
  transition: background 0.3s ease;

  &:hover {
    cursor: pointer;
    &:before {
      width: 100%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 0%;
    bottom: 0;
    right: 0;
    z-index: -1;
    top: 0;
    left: 0;
    background: ${({ theme: { color } }) => color.highlight};
    transition: width 0.2s linear;
  }
`;
