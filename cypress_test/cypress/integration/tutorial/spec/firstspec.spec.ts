import { LoginPage } from "../../../src/pages/LoginPage";
import { RegistrationPage } from "../../../src/pages/RegistrationPage";
describe("Registration and Login functionality", ()=>
    {
        it("login functionality with valid credentials", () =>
        {
            var loginPage =  new LoginPage();
            var registrationPage = new RegistrationPage();
            cy.eyesOpen({
                appName: 'Cypress Applitools Tutorial',
                testName: 'Cypress Applitools Tutorial',            
              });
            
            loginPage.OpenBrowser("http://amasik.com/demo/angularjs/angular-app");
            loginPage.ClickRegister();
            registrationPage.Register("Hola","Testing", "HolaTesting@gmail.com","123456"); 
            cy.eyesClose();
            
        });

    });