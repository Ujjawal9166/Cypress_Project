/// <refrence types = "Cypress"/>

describe('Handling Calenders', () => {
    it('Should handle Calenders', () => {
      
        const monthNumber ="6";
        const date = "12";
        const year = "2027";
        const expectedList =[monthNumber,date,year]     

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button',year).click()
      
        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber)-1).click();
        cy.contains('abbr',date).click()

        //Assertions
        //written a comman class for month,date,year and iterate through each() method
        cy.get('.react-date-picker__inputGroup__input').each(($e1,index) =>
        {
            //for resolve promise used wrap() to wrap $e1 and invoke attribute value by using val method
            //and by eq indexing check all index as per variable created expectedList
            cy.wrap($e1).invoke('val').should('eq',expectedList[index])
        })


 
    });
 
});
  
