Feature: End to End Ecommerse validation

    Application Regression
    @Regression
    Scenario: Ecommerce product delivery
    Given I open Ecommerce page
    When I add product to cart
    And validate the total prices
    Then select the country submit and varify thank you 

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details

    #below are the data works as a datatable
        |name | gender |
        |Bobz | Male   |
    Then validate the form behaviour
    And select the shop page