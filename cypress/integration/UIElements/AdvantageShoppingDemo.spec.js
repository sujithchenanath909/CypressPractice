
describe('UIElements Test',()=>{

    it('VisitPageandLoadProduct',()=>{

        cy.visit('http://advantageonlineshopping.com/#/');
        cy.wait(3000);
       // cy.title().should('eq',' Advantage Shopping');

        cy.get('div[aria-label=MiceCategory]').click();
        cy.get('[id=28]').click();
        cy.get('[ng-show="firstImageToShow"] > .RED').click();
        cy.get('.fixedBtn > .roboto-medium').should('be.visible').click();

        cy.get('[name=check_out_btn]').click();
        
        cy.get('.roboto-bold > .roboto-medium').should('have.text','$29.99');

    })

})