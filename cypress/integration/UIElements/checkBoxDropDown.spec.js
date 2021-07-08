
describe('CheckBoxesAndDropdowns',()=>{

    it('CheckBoxes',()=>{
        cy.visit('http://demo.automationtesting.in/Register.html');
        //select the checkboxes and verify the checked and value 
        cy.get('[id=checkbox1]').check().should('be.checked').should('have.value','Cricket')
        cy.get('[id=checkbox2]').check().should('be.checked').should('have.value','Movies')
        cy.get('[id=checkbox3]').check().should('be.checked').should('have.value','Hockey')

        //uncheck the checkboxes
        cy.get('[id=checkbox1]').uncheck().should('not.be.checked')
        cy.get('[id=checkbox2]').uncheck().should('not.be.checked')
        cy.get('[id=checkbox3]').uncheck().should('not.be.checked')

        //select check boxes by providing their values in array
        cy.get('[type=checkbox]').check(['Cricket','Hockey'])
    })

    it('DrobDowns',()=>{
        cy.get('#Skills').select('Android').should('have.value','Android');
    })

    it('Languages Multi Select',()=>{
        cy.get('#msdd').click();
        cy.get('.ui-corner-all').contains('English').click();
        cy.get('.ui-corner-all').contains('Hindi').click();
        cy.get('.ui-corner-all').contains('Japanese').click();
    })

    it('Select Countires',()=>{
        cy.get('[role=combobox]').click({force : true});
        cy.get('.select2-search__field').type('Indi');
        cy.get('.select2-search__field').type('{enter}');
    })

})