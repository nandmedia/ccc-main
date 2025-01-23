describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate through main pages', () => {
    // Check home page
    cy.get('h1').contains('Welcome to Cipher Chain');

    // Navigate to About
    cy.get('a').contains('About').click();
    cy.url().should('include', '/about');

    // Navigate to White Paper
    cy.get('a').contains('White Paper').click();
    cy.url().should('include', '/whitepaper');

    // Navigate to FAQ
    cy.get('button').contains('FAQ').click();
    cy.get('a').contains('What is Cipher Chain Coin').click();
    cy.url().should('include', '/faq');
  });
});