describe('Courses flow', () => {
  it('visits the courses page and checks for course listings', () => {
    cy.visit('/courses');

    // The page structure may vary; check for likely headings or course cards
    cy.contains(/Courses|All Courses|Popular Courses|Courses Offered/i).should('be.visible');

    // If there are course cards, at least one should be visible
    cy.get('article, .course-card, .course, .card').first().should('exist');
  });
});
