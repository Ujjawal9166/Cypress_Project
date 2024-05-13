
import HomePage from "../../../support/pageObjects/homePage";
import ProductPage from "../../../../support/pageObjects/ProductPage";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { when } from "cypress/types/jquery";

//import { DataTable } from "@badeball/cypress-cucumber-preprocessor";
//import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homePage = new HomePage()
const productPage = new ProductPage()
let name
Given("I open Ecommerce page", () => {
    cy.visit(Cypress.env('url') + "/angularpractice/")

})

When("I add product to cart", function()  {
    homePage.getShopTab().click()

    this.data.productName

    this.data.productName.forEach(function (element) {
        cy.selectProduct(element)
    });

    //click on checkout button
    productPage.getCheckoutTab().click()
})

when("validate the total prices", () => {
    var sum = 0;
    productPage.getProductAmount().each(($el, index, $list) => {

        //java script logic to get the amount and get the sum
        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)

    }).then(function () {
        cy.log(sum)
    })
    //======================================================================= 
    //validate the total sum of cart amount
    productPage.validateCartTotal().then(function (element) {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
    })
})

then("select the country submit and varify thank you", () => {
    productPage.checkoutProducts().click()

    Cypress.config('defaultCommandTimeout', 8000) //explicit type of wait statement 
    productPage.getCountryTexBox().type('India')
    // cy.wait(7000)
    productPage.clickOnCountrySuggestion().click()
    //productPage.clickOnCheckbox().click({force: true})
    cy.get('#checkbox2').click({ force: true })
    productPage.getPurchageTab().click()
    //productPage.getSuccessfulAlert().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

    //some hidden words are hidden inserted in alert message so we need to handle by using includes()
    cy.get('.alert').then(function (element) {
        const actualText = element.text()
        expect(actualText.includes('Success')).to.be.true
    })
})
name = dataTable.rawtable[1][0]
//2nd scenario
when("I fill the form details", function (dataTable) {

    homePage.getEditBox().type(dataTable.rawtable[1][0])
    homePage.getGender().select(dataTable.rawtable[1][1])
})

Then("validate the form behaviour", function () {
    homePage.getTwoWayDataBinding().should('have.value', name)
    cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
    homePage.getEnterprenuerRadioButton().should('be.disabled')
})

Then("select the shop page", function () {
    homePage.getShopTab().click()
})