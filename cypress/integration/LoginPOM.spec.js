import LoginPage from './PageObjects/LoginPage';

describe('POMSuite',()=>{

it('LoginTestPOM',()=>{
    const lpa=new LoginPage()
    lpa.visit();
    lpa.fillEmail('admin@yourstore.com');
    lpa.fillPassword('admin');
    lpa.submit();


})

})