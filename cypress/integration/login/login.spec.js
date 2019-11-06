/// <reference types="Cypress" />

beforeEach(() => {
  cy.viewport(1440, 900);
  cy.visit('https://demo.vuestorefront.io');
  cy.get('[data-testid="accountButton"]').click();
});

describe('Login', () => {
  it('displays error message on invalid credentials', () => {
      cy.get('input[name="email"]').type('test@email.com');
      cy.get('input[name="password"]').type('test{enter}');
      cy.get('[data-testid="notificationMessage"]').should(
          'contain',
          'You did not sign in correctly or your account is temporarily disabled'
      );
  });

  it('displays success message on valid credentials', () => {
      cy.get('input[name="email"]').type('test@email.co.uk');
      cy.get('input[name="password"]').type('Letmein!{enter}');
      cy.get('[data-testid="notificationMessage"]').should(
          'contain',
          'You are logged in'
      );
  });
});