describe('Navigations',()=>{

    it('Back Forward',()=>{

        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq','nopCommerce demo store');
        
        cy.get('.ico-register').contains('Reg').click();
        cy.title().should('eq','nopCommerce demo store. Register');

        cy.go('back'); //we can also use cy.go(-1)
        cy.title().should('eq','nopCommerce demo store');

        cy.go('forward'); //we can also use cy.go(1)
        cy.title().should('eq','nopCommerce demo store. Register');

        //to reload the page
        cy.reload();

    })

})