/// <refrence types = "Cypress"/>
/// <refrence types = "cypress-iframe"/>
import 'cypress-iframe' 
describe('Handling Frame', () => {
    it('Should handle Frame', () => {
      
        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(3000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
        
       
         

 
 
 
    });
 
});
  
