import { GradientText } from '@utils/style-utils';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  padding: 1rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
`;

export const H1 = styled.h1`
  ${GradientText};
  font-size: 5rem;
`;

export const Paragraph = styled.p`
  font-size: clamp(2rem, 2vw, 3rem);
  line-height: 4rem;
`;
