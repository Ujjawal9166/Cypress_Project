/// <refrence types = "cypress" />

describe('My Second Cypress Test suite', function() {
    it('My second test case', function() {
    //Visit the  Website
    cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
    // hit on elemement and enter text
    cy.get('.search-keyword').type('Ca')
    // hard wait statement
    cy.wait(2000)
   
    // parent child chaining -> limit the scope

    cy.get('.products').as('productLocator') // aliasing the .product object for entire use or declared variable

    
    //iterate through each index and find the specific product and click
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

      
       const textVeg= $el.find('h4.product-name').text()
       if(textVeg.includes('Cashews'))
       {
        cy.wrap($el).find('button').click()
       }

      })

      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()

       })

  
  })
  
