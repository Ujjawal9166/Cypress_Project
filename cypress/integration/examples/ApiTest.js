/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {

    cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
        
        "name": "Learn Appium Automation with java",
        "isbn": "bcdss",
        "aisle": "22s7",
        "author": "Alex"
    }).then(function(response)
    {
        expect(response.body).to.have.property("Msg","successfully added")
        expect(response.status).to.eq(200)
    })

    

})
})