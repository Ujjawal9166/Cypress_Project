class ProductPage {

    getCheckoutTab() {
        return cy.contains('Checkout')
    }
    checkoutProducts() {
        return cy.get(':nth-child(4) > :nth-child(5) > .btn')
    }
    getCountryTexBox() {
        return cy.get('#country')
    }
    getProductAmount() {
        return cy.get('tr td:nth-child(4) strong')
    }
    validateCartTotal() {
        return cy.get('h3 strong')
    }
    clickOnCountrySuggestion() {
        return cy.get('.suggestions > ul > li > a')
    }
    getPurchageTab() {
        return cy.get('[type="submit"]')
    }
    clickOnCheckbox() {
        cy.get('#checkbox2')
    }
    getSuccessfulAlert() {
        cy.get('.alert')
    }


}
export default ProductPage;