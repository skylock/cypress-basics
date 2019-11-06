/// <reference types="Cypress" />

describe('Login with valid credentials', () => {
  it.only('should be successfull using UI', () => {
    cy.viewport(1440, 900);
    cy.visit('https://demo.vuestorefront.io');
    cy.get('[data-testid="accountButton"]').click();

    cy.get('input[name="email"]').type('test@email.co.uk');
    cy.get('input[name="password"]').type('Letmein!{enter}');
    cy.get('[data-testid="notificationMessage"]').should(
        'contain',
        'You are logged in'
    );
  });

  it('should be successfull using API', () => {
    const options = {
      method: 'POST',
      url: 'https://demo.storefrontcloud.io/api/user/login',
      body: {
        username: 'test@email.co.uk',
        password: 'Letmein!'
      }
    };

    cy.request(options).then( res => {
      expect(res.status).to.eq(200);
    });
  });
});