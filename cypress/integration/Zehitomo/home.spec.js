describe('home Page Suite',()=>{

    it('Login-Failure',()=>{
        cy.visit('https://www.zehitomo.com/en')
        cy.title().should('eq','Zehitomo | Connect with the best Local Service Professionals')

        cy.get('.Header_z-header__bjN4P > .btn').click();
        cy.get(':nth-child(3) > .MenuItem_item__3Qsdk').click();
        cy.get('#email-input').type('ss@gmail.com');
        cy.get('#password-input').type('pass');
        cy.get('.ng-valid-email.ng-valid-parse > .block').click();
        
        cy.get('p > .ng-binding').should('have.text','Email address or password is not valid')
       // cy.get('.block large ng-scope').click();
    })


    it('Forget-Password',()=>{
        cy.visit('https://www.zehitomo.com/en')
        cy.title().should('eq','Zehitomo | Connect with the best Local Service Professionals')

        cy.get('.Header_z-header__bjN4P > .btn').click();
        cy.get(':nth-child(3) > .MenuItem_item__3Qsdk').click();
        cy.get('#email-input').type('ss@gmail.com');
        cy.get('#password-input').type('pass');
        cy.get('.ng-valid-email.ng-valid-parse > .block').click();
        cy.get('.sign-up-form > .text-right > .ng-scope').click();
        cy.get('#email-input').type('ss@gmail.com');
        cy.get('.block').click();
        cy.get('.verify-email-sent').should('have.text','Reset password email has been sent.\nPlease check your email inbox.')
        //cy.get('p > .ng-binding').should('have.text','Email address or password is not valid')
       // cy.get('.block large ng-scope').click();
    })

})