describe('Site navigation flows', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to Courses from the header', () => {
    cy.contains(/Courses|All Courses/i).click();
    cy.location('href').should('match', /courses|course/i);
    cy.contains(/Courses|All Courses|Popular Courses/i).should('be.visible');
  });

  it('navigates to Mentorship from the header', () => {
    cy.contains(/Mentorship/i).click();
    cy.location('href').should('match', /mentorship|mentor/i);
    cy.contains(/Mentorship|Mentor/i).should('be.visible');
  });

  it('opens Login page from header', () => {
    cy.contains(/Login|Sign In/i).click();
    cy.location('href').should('match', /login|sign-in|signin/i);
    cy.contains(/Login|Sign In|Welcome back/i).should('be.visible');
  });
});
