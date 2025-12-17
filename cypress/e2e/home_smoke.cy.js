describe('Home smoke tests — Joint Investment', () => {
  it('loads the home page and checks hero and main sections', () => {
    cy.visit('https://www.jointinv.com/home');

    // Check that key headings/content exist
    cy.contains(/Investment Opportunities/i).should('be.visible');
    cy.contains(/WHAT WE DO|We invest your funds/i).should('be.visible');
    cy.contains(/WE INVEST UKWIDE/i).should('be.visible');
  });
});
