it('displays 404 page if the url doesnt match any route', () => {
  cy.visit('/asdasdasdasd43535', { failOnStatusCode: false });

  cy.findByRole('heading', { name: /404/ });
});

// eslint-disable-next-line jest/no-export
export {};
