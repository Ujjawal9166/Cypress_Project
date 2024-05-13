/// <refrence types = "Cypress"/>

describe('Handling Frame', function() {

    before(function(){
        //runs once before all test in the block 
        // here data object is representing whole json data of cypress_test
        cy.fixture('example').then(function(data) 
        {
           // but data can not be use out side for class functions we need to use some global variable which make it global for entire class use 
           // "this" will having access for complete class
           this.data = data           
        })
    })



    it('Should handle Frame', function() {
      
        cy.visit(Cypress.env('url')+"/angularpractice/")
        //we need to call name by using data object with "this" which make it accessable 
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name) 
        cy.get('select').select(this.data.gender)

        //1st validation is compare the name should be same in box name text box
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name) //here 1st name text box is compariang and validating with binding box in botttom by using given data in fixtures
        
        //2nd validation should be minimum text length for name is 2 
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2') // here 'attr' querry is validating the 'minlength' attribute should be 2

        //3rd validation should be 'enterprenuer' button is disable 
        cy.get('#inlineRadio3').should('be.disabled')

        //by using'support' folder we will create a custom command which will work for below script 
        //click on 'shop' button
        cy.get(':nth-child(2) > .nav-link').click()
        // cy.selectProduct('Blackberry')
        // cy.selectProduct('Nokia Edge')
        // instead of invoking selectProduct for everytime we should use external file array 
        this.data.productName
        //by using 'forEach()' mehod of javascript array is iterated and sorted in element 
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });
        



   
        
       
         

 
 
 
    });
 
});
  
