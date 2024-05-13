/// <refrence types = "Cypress"/>
import HomePage from "../../support/pageObjects/homePage"; //same as Test4 but here integrated with pageObject class
import ProductPage from "../../support/pageObjects/ProductPage";
describe('E2E Scenarios', function () {

    before(function () {
        //runs once before all test in the block 

        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })



    it('Should perform e2e testing', function () {

        // after importing the page object create the object of pageobject class
        const homePage = new HomePage()
        const productPage = new ProductPage()


        cy.visit(Cypress.env('url')+"/angularpractice/")
        //by using homePage object call the get function from page object class

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        //1st validation is compare the name should be same in box name text box
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        //2nd validation should be minimum text length for name is 2 
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')

        //3rd validation should be 'enterprenuer' button is disable 
        homePage.getEnterprenuerRadioButton().should('be.disabled')




        //click on shop Tab
        homePage.getShopTab().click()

        this.data.productName

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });


        //click on checkout button
        productPage.getCheckoutTab().click()
        //===========================================================================
        var sum = 0;
        productPage.getProductAmount().each(($el, index, $list) => {

            //java script logic to get the amount and get the sum
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)
           
        }).then(function(){
            cy.log(sum)
        })
       //======================================================================= 
       //validate the total sum of cart amount
       productPage.validateCartTotal().then(function(element){
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
       })
       //=======================================================================
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











    });

});

