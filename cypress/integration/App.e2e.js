describe('App E2E', () => {
  it('renders h1 welcome message', () => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Welcome to React');
  });

  it('renders greeting text', () => {
    cy.visit('/');
    cy.get('#greetings').should('have.text', 'Hello John!');
  });

  it('renders example button', () => {
    cy.visit('/');
    cy.get('#example-button').should('have.text', 'Example Button');
  });

  it('renders users list', () => {
    cy.visit('/');
    cy.get('.users-list').should('to.exist');
  });

  it('renders login form', () => {
    cy.visit('/');
    cy.get('.login-form').find('#email').should('to.exist');
    cy.get('.login-form').find('#password').should('to.exist');
    cy.get('.login-form').find('#login-button').should('to.exist');
  });

  it('renders counter component', () => {
    cy.visit('/');
    cy.get('.counter').should('to.exist');
  });

  it('renders counter component header title', () => {
    cy.visit('/');
    cy.get('.counter').find('h3').should('have.text', 'Counter Component');
  });

  it('should increment and decrement the counter', () => {
    cy.visit('/');

    cy.get('.counter').find('p').should('have.text', '0');
    cy.get('.counter').find('button').contains('Increment').click();
    cy.get('.counter').find('p').should('have.text', '1');
    cy.get('.counter').find('button').contains('Increment').click();
    cy.get('.counter').find('p').should('have.text', '2');

    cy.get('.counter').find('button').contains('Decrement').click();
    cy.get('.counter').find('p').should('have.text', '1');
  });
});
