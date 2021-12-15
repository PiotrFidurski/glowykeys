describe('HomePage tests', () => {
  beforeEach(() => {
    cy.task('clearNock');
  });

  it('has a link to "/keyboards"', () => {
    cy.mockServerData({ path: '/api/keyboards', fixture: 'keyboards.json' });

    cy.visit('/');

    cy.findByRole('link', { name: /go to keyboards page/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/keyboards`);
  });

  it('has a link to "/keycaps"', () => {
    cy.mockServerData({ path: '/api/keycaps', fixture: 'keycaps.json' });

    cy.visit('/');

    cy.findByRole('link', { name: /go to keycaps page/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/keycaps`);
  });

  it('has a link to "/switches"', () => {
    cy.mockServerData({ path: '/api/switches', fixture: 'switches.json' });

    cy.visit('/');

    cy.findByRole('link', { name: /go to switches page/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/switches`);
  });

  it('has a link to "/keyboards?variants=gaming"', () => {
    cy.mockServerData({ path: '/api/keyboards', fixture: 'keyboards.json' });

    cy.visit('/');

    cy.findByRole('link', { name: /gaming keyboards/i }).click();

    cy.findByRole('checkbox', { name: /gaming/ });

    cy.should('be.checked');

    cy.findByRole('button', { name: /gaming filter/ });
  });

  it('has a link to "/keyboards?variants=casual"', () => {
    cy.mockServerData({ path: '/api/keyboards', fixture: 'keyboards.json' });

    cy.visit('/');

    cy.findByRole('link', { name: /casual keyboards/i }).click();

    cy.findByRole('checkbox', { name: /casual/ });

    cy.should('be.checked');

    cy.findByRole('button', { name: /casual filter/ });
  });

  it('each search result is a link that redirects to details page', () => {
    cy.intercept({ url: '/api/search?query=a', query: { query: 'a' } }, { fixture: 'search.json' }).as('getResults');

    cy.visit('/');

    cy.findByRole('button', { name: /open search dialog/i }).click();

    cy.findByRole('textbox', { name: /search/i }).type('a');

    cy.wait('@getResults');

    cy.findByRole('link', { name: /gigabyte force k81/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/keyboards/gigabyte-force-k81`);
  });

  it('has a functioning hamburger menu on smaller viewports', () => {
    cy.viewport('iphone-5');

    cy.findByRole('button', { name: /open menu/i }).click();

    cy.findByRole('navigation', { name: 'menubar' });

    cy.findByRole('link', { name: /sign in/i });
    cy.findByRole('button', { name: /open cart/i });
    cy.findByRole('button', { name: /open search dialog/i });

    cy.findByRole('button', { name: /close menu/i })
      .should('have.attr', 'aria-expanded', 'true')
      .click()
      .as('toggleMenuButton');

    cy.get('@toggleMenuButton').should('have.attr', 'aria-expanded', 'false');
  });
});

// eslint-disable-next-line jest/no-export
export {};
