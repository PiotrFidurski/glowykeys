import { Container, H1, Paragraph } from '@styled/pages/404PageStyles';
import * as React from 'react';

function Custom404() {
  return (
    <Container>
      <H1>404</H1>
      <Paragraph>Looks like you stumbled upon a not existing page, try checking that url.</Paragraph>
    </Container>
  );
}

export default Custom404;
