/// <refrence types = "cypress" />

describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
      
       // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       //write it call the url globally on config .js file and invoke here
       cy.visit(Cypress.env('url')+"/AutomationPractice/");
 
       cy.get("#opentab").invoke('removeAttr','target').click();  //under invoke function of jquerry using removeAttr parameter removing the target attribute at runtime
 
       cy.origin("https://www.qaclickacademy.com",()=>    // tellling cypress that now we need to perform action on this domain
       {
        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');
        //cy.contains('Courses').click();
 
       })
 
 
 
 
    });
 
});
  
