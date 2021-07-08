Cypress.config('chromeWebSecurity', false);

describe('Alerts Test',()=>{

    it('alert',()=>{
    cy.visit('https://www.seleniumeasy.com/test/javascript-alert-box-demo.html');
    cy.get('button[class="btn btn-default"]').click();
//Cypress will automatically capture the alerts and ignore to capture a msg inside an alert
//we need to raise a event using cypress.on here window:alert event

cy.on('window:alert',(msg)=>{
    expect(msg).to.equal('I am an alert box!')
})
//Similar to this if we want to capture confirmation alerts we need to use different 
//event window:confirm

/*cy.on('window:confirm',(msg)=>{
    expect(msg).to.equal('I am an alert box!')
})*/

    })

})