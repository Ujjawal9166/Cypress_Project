// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('selectProduct', (productName) => { // here created custom command name 'selectProduct' and use it in testscript to access the entire below code
  cy.get('h4.card-title').each(($el, index, $list) => { //here grab all the products and iterate all with 'each' and store in index
    if ($el.text().includes(productName)) //here wrap $el with if block and grab by iterating above its 'text' using 'includes()' function and provide product name 
    {
      cy.get('button.btn.btn-info').eq(index).click() //here grab all add to cart button and using 'eq()' call the index by 'index'
    }
  })
})

Cypress.Commands.add("LoginAPI", () => {

  cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", 
  { userEmail: "ujjawalsingh.textile@gmail.com", userPassword: "Shubham@1234" })
  .then(function(response)
  {
    expect(response.status).to.eq(200)
    Cypress.env('token', response.body.token);
  })
})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })