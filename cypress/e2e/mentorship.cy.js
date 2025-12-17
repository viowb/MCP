describe('Mentorship tab', () => {
  it('visits site and clicks Mentorship tab', () => {
    cy.visit('/');
    // Click the Mentorship tab by visible text
    cy.contains('Mentorship').click();

    // Basic assertions: URL or visible content — the site may change, so keep assertions flexible
    cy.url().should((url) => {
      expect(url).to.match(/mentorship|Mentorship|mentor/i);
    });

    cy.contains(/Mentorship|Mentor|Mentorship Programs/i).should('be.visible');
  });
});
