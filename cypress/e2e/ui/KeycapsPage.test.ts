describe('Keycaps page tests', () => {
  it('displays only filtered results if there are present in url query params', () => {
    cy.visitAndControlNextData({
      url: '/keycaps?brand=Razer&color=black',
      type: 'keycaps',
      fixture: 'keycaps.json',
    });

    cy.findByRole('button', { name: /razer filter/i });

    cy.findByRole('button', { name: /black filter/i });

    cy.findByRole('region', { name: /list of products/i })
      .children()
      .should('have.length', 1);
  });
});

// eslint-disable-next-line jest/no-export
export {};
