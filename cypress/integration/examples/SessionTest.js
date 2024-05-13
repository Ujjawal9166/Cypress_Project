/// <refrence types = "cypress" />
const neatCSV = require('neat-csv')
let productName
describe('JWT Session', () => {
    it('is logged in through local storage ', async() => {

        cy.LoginAPI().then(function()
        {
            //before loading the url we need to set the token on local storage so methos is "onBeforeLoad()" under "visit()" method
            cy.visit("https://rahulshettyacademy.com/client",{
                onBeforeLoad : function(window)
                {
                    //below script invoke the token and set it to the local storage before url loading and that will skip the login screen 
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get(".card-body b").eq(1).then(function(ele)
    {
        productName = ele.text()
    })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get("[routerlink*='cart']").click()
        cy.contains('Checkout').click()
        cy.get("[placeholder*='Country']").type('ind')
        cy.get(".ta-results button").each(($el, index, $list)=>
        {
            if($el.text() === " India")
            {
                cy.wrap($el).click()
            }
        })
        cy.get(".action__submit").click()
        cy.wait(2000)
        cy.contains("Click To Download Order Details in CSV").click();

        //set the csv peroperly and dynamically set the set the folder  and resolve the promice by using then()
        
        
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_ujjawalsingh.textile.csv")
        .then(async (text) =>
        {
            const csv = await neatCSV(text)
            console.log(csv)
            const actualProductName = csv[0] ["Product Name"]
            expect(productName).to.equal(actualProductName)
        })
        





    })
})