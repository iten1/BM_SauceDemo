/// <reference types="cypress"/>

describe('Open New Account Suite', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce("__cfduid", "JSESSIONID");
    })
    before(() => {
        cy.visit("https://www.saucedemo.com/index.html");

    })

    it('Should Login', () => {
        cy.login();
    })

    it('Should Sort The Products', () => {
        cy.get('.product_sort_container').select('Price (low to high)');

     
     })

    it('Should LogOut', () => {
        cy.logOut();
    })
    

})






    // it('Should Log Out Successfully', () => {

    //     cy.logOut();

    // })








