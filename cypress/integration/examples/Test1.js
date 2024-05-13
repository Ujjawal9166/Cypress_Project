/// <refrence types = "cypress" />

describe('My First Cypress Test suite', function() {
    it('My first test case', function() {
    //Visit the  Website
    cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
    // hit on elemement and enter text
    cy.get('.search-keyword').type('Ca')
    // hard wait statement
    cy.wait(2000)
    //put asserton for 4 product under ca text suggestion added visible to check only visible product it will stop the invisible element locating 
    cy.get('.product:visible').should('have.length',4)
    // parent child chaining -> limit the scope

    cy.get('.products').as('productLocator') // aliasing the .product object for entire use or declared variable

    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
    //iterate through each index and find the specific product and click
    cy.get('@productLocator').find('.product').each(($el, index, $list) => {

      
       const textVeg= $el.find('h4.product-name').text()
       if(textVeg.includes('Cashews'))
       {
        cy.wrap($el).find('button').click()
       }

      })

      //assert if logo text is correctly displayed 
      cy.get('.brand').should('have.text','GREENKART')


      //this is to print in logs
       cy.get('.brand').then(function(logoelement)
       {
        cy.log(logoelement.text())

       })

      
  
  })
  })
