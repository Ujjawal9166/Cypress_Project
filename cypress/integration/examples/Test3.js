/// <refrence types = "cypress" />

describe('My third Cypress Test suite', function() {
    it('My third test case', function() {
    //Visit the  Website
    cy.visit(Cypress.env('url')+"/AutomationPractice/")
    
    // click on checkbox
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    //select static dropdown
    cy.get('Select').select('option2').should('have.value','option2')

    //select dynamic dropdown
    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if($el.text()==="India")
        {
            $el.click() 
        }

    })
    cy.get('#autocomplete').should('have.value','India')

    //handle visibility and invisibility of element 
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //handling radio buttons
    cy.get('[value="radio2"]').check().should('be.checked')

    //handling alert
    cy.get('#name').type('Ujjawal')
    cy.get('#confirmbtn').click()
    cy.get('#alertbtn').click()

       })

  
  })
  
