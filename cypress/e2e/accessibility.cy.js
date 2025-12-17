describe('Accessibility checks (cypress-axe) — Joint Investment', () => {
  it('has no critical or serious accessibility violations on home', () => {
    cy.visit('https://www.jointinv.com/home');
    cy.injectAxe();
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] });
  });
});
