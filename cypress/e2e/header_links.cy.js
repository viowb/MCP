describe('Header and footer link matrix — Joint Investment', () => {
  it('verifies Complaint Policy link in footer', () => {
    cy.visit('https://www.jointinv.com/home');
    cy.get('a').contains(/Complaint Policy/i).should('have.attr', 'href').and('match', /complaint-policy/);
  });

  it('verifies About / What We Do links', () => {
    cy.visit('https://www.jointinv.com/home');
    cy.get('a').contains(/About/i).should('exist');
    cy.get('a').contains(/What We Do/i).should('exist');
  });

  it('verifies external links open expected domains', () => {
    cy.visit('https://www.jointinv.com/home');
    cy.get('a').contains(/Amazon Book/i).should('have.attr', 'href').and('match', /amazon\.co\.uk/);
    cy.get('a').contains(/Companies House|Company Number/i).should('have.attr', 'href').and('match', /companiesmadesimple|companieshouse|companieshouse\.gov/);
  });
});
