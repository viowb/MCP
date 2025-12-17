describe('Contact link checks — Joint Investment', () => {
  it('checks phone number and mailto links exist', () => {
    cy.visit('https://www.jointinv.com/home');

    // Phone
    cy.get('a[href^="tel:"]')
      .should('exist')
      .and('have.attr', 'href')
      .and('match', /tel:/);

    // Email
    cy.get('a[href^="mailto:"]')
      .should('exist')
      .and('have.attr', 'href')
      .and('match', /mailto:/);
  });
});
