///<reference types="cypress" />

describe('Add Products From Landing Page Suite', () => {

    before(() => {
        cy.visit("https://www.saucedemo.com/index.html");

    })

    it('Should Login', () => {
        cy.login();
    })

    it('Should Add Products', () => {
        cy.get("#inventory_container").within(() => { 
        cy.contains("ADD TO CART").eq(0).click();
        })
        cy.get(".shopping_cart_badge").then((counter)=>{
            expect(counter.text()).not.to.be.empty;
        })

        
    })

})