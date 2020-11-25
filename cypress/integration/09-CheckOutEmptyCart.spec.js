///<reference types="cypress" />

describe('Remove Products From Cart Suite', () => {

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

    it('Should View Cart Products' , () => {
        cy.get("#shopping_cart_container").click();
    }) 

    it('Should Remove Product From Cart' , () => {
        cy.get("#cart_contents_container").within(()=> {
            cy.contains("REMOVE").click();
            // cy.get(".shopping_cart_badge").then((counter)=>{
            //     expect(counter.text()).to.be.empty;
            // })
        })
    
    }) 

    it('Should Click on CheckOut Button' , () => {
        cy.get("#cart_contents_container").within(()=> {
            cy.contains("CHECKOUT").click();
        })
    
    }) 

    it('Should Fill CheckOut Form' , () => {
        cy.get("#first-name").type("Iten");
        cy.get("#last-name").type("Saad");
        cy.get("#postal-code").type("11742");

        cy.get("#checkout_info_container").within(()=> {
            cy.contains("CONTINUE").click();
            cy.url().should('include', 'checkout-step-two');
        })
    })

    it('Should Finish CheckOut ' , () => {
        cy.get("#checkout_summary_container").within(()=> {
            cy.contains("FINISH").click();
            cy.url().should('include', 'checkout-complete');
        })

    })

})