describe('Login', () => {
  it('should login and go to home page', () => {
    cy.visit('https://localhost.dev.io:9000/login')
    
    cy.get('input').should('have.length', 2)
    cy.get('button').should('be.disabled', true)

    cy.get('input').eq(0).type('John')
    cy.get('input').eq(1).type('somepassword')
    
    cy.get('button').should('not.be.disabled')

    cy.get('button').click()

    cy.url().should('eq', 'https://localhost.dev.io:9000/')
  })
})