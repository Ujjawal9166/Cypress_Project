/// <refrence types = "cypress" />

describe('Handling Mouse Hover', () => {
    it('Should handle mouse hover', () => {
      
        cy.visit(Cypress.env('url')+"/AutomationPractice/");
        //cy.get('.mouse-hover-content').invoke('show') //jquerry methods will ony work with immediate parents
        
        //or we can perform clicking on invisible element by using {force:true} on click() method without invoke Jquerry methods 

        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
      
         

 
 
 
    });
 
});
  
