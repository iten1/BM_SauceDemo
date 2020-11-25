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
            cy.contains("REMOVE").each((elm,index)=>{
                cy.contains("REMOVE").eq(index).click();
            })            
        })
    }) 


    

})