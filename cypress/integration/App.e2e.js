describe('App E2E', () => {
  it('renders h1 welcome message', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Welcome to React');
  });

  it('renders greeting text', () => {
    cy.visit('/');
    cy.get('#greetings').should('have.text', 'Hello John!');
  });

  
});
