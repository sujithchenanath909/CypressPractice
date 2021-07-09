describe('customCommandsSuite',()=>{

it('LoginTestCase',()=>{
cy.login('admin@yourstore.com','admin');
cy.title().should('be.equal','Dashboard / nopCommerce administration');

cy.login('admin@yourstore.com','admin123');
cy.title().should('not.be.equal','Dashboard / nopCommerce administration');


cy.login('admin@yourstore123.com','admin');
cy.title().should('not.be.equal','Dashboard / nopCommerce administration');
cy.log('Logging in test case')

})


it('ADD User',()=>{
    cy.login('admin@yourstore.com','admin');
    cy.log('Adding User..')
    
})


it('Edit User',()=>{
    cy.login('admin@yourstore.com','admin');
    cy.log('Editing User...')
    
})


})