/// <refrence types = "cypress" />

describe('Handling window Alert or popups', function() {
    it('My fourth test case', function() {
    //Visit the  Website
    cy.visit(Cypress.env('url')+"/AutomationPractice/")
    
    //handling alerts
    cy.get('#name').type('Ujjawal')
    cy.get('#confirmbtn').click()
    cy.get('#alertbtn').click()

    //window alert == window:alert
    cy.on('window:alert',(str) =>
    {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm',(str) =>
    {
        //Mocha
        expect(str).to.equal('Hello Ujjawal, Are you sure you want to confirm?')
    })




       })

  
  })
  
