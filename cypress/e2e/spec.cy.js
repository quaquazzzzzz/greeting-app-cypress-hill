describe('Greeting app', () => {
  beforeEach(() => {
    cy.log("I run before every test in every spec file")
    cy.visit('/greeting.html')
  })
  it('should display a greeting message after submitting a name', () => {
    const name = "Cypress"
    cy.get('#nameInput').type(name)
    cy.get('button').click()
    // Backticks hinzufügen, um den Template-Literal zu definieren
    cy.get('#greetingMessage').should('have.text', `Hello, ${name}!`)
  })
  afterEach(() => {
    cy.log("I run after every test in every spec file")
  })
})
