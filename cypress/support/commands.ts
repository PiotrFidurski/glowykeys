// ***********************************************

Cypress.Commands.add('mockServerData', ({ path, fixture }) => {
  // eslint-disable-next-line promise/catch-or-return
  cy.fixture(fixture).then((data) =>
    cy.task('nock', {
      hostname: 'http://localhost:3000/',
      method: 'GET',
      path,
      statusCode: 200,
      body: {
        data: data.data,
        status: 200,
      },
    })
  );
});

export {};
