describe('home page spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('login page spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('.email').type('admin@example.com')
    cy.get('.password').type('1234')
  })
})