// ***********************************************

Cypress.Commands.add('visitAndControlNextData', ({ url = '/keyboards', type, fixture }) =>
  // eslint-disable-next-line promise/always-return
  cy.fixture(fixture).then((data) => {
    cy.visit(url, {
      onBeforeLoad: (win) => {
        let nextData;

        Object.defineProperty(win, '__NEXT_DATA__', {
          set(o) {
            // eslint-disable-next-line no-param-reassign
            o.props.pageProps[type] = data.data;
            nextData = o;
          },
          get() {
            return nextData;
          },
        });
      },
    });
  })
);

export {};
