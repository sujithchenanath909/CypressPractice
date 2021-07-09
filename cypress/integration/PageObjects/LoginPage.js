/// <reference types='Cypress'/>



class LoginPage{
    visit(){
        cy.visit('https://admin-demo.nopcommerce.com/login');
            }
        
            fillEmail(value){
                const feild=cy.get('#Email')
                feild.clear();
                feild.type(value);
                return this;
            }
            fillPassword(value){
                const feild =cy.get('#Password');
               feild.clear();
               feild.type(value);
                return this;
            }
            submit(){
                const feild=cy.get('button[type=submit]')
                feild.click();
            }
}

export default LoginPage;