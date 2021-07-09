/// <reference types="cypress"/>
describe('FixturesDemo',()=>{

before(()=>{
    cy.fixture('users').then(function(data){
        this.data=data
    })
})

it('FixturesTestCase',function(){

    cy.visit('https://admin-demo.nopcommerce.com/login');
    cy.get('#Email').clear().type(this.data.email);
    cy.get('#Password').clear().type(this.data.password);
    cy.get('button[type=submit]').click();

})


})
