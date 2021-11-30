describe('Switches page tests', () => {
  it('displays only filtered results if there are present in url query params', () => {
    cy.visitAndControlNextData({
      url: '/switches?brand=Idobao&color=white',
      type: 'switches',
      fixture: 'switches.json',
    });

    cy.findByRole('button', { name: /idobao filter/i });

    cy.findByRole('button', { name: /white filter/i });

    cy.findByRole('region', { name: /list of products/i })
      .children()
      .should('have.length', 1);
  });
});

// eslint-disable-next-line jest/no-export
export {};
