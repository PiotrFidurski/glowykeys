describe('Keyboards page tests', () => {
  it('displays only filtered results if there are present in url query params', () => {
    cy.visitAndControlNextData({
      url: '/keyboards?variant=casual&color=black',
      type: 'keyboards',
      fixture: 'keyboards.json',
    });

    cy.findByRole('button', { name: /black filter/i });

    cy.findByRole('button', { name: /casual filter/i });

    cy.findByRole('region', { name: /list of products/i })
      .children()
      .should('have.length', 4);
  });
});

// eslint-disable-next-line jest/no-export
export {};
