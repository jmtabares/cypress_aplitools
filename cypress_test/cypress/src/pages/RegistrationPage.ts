export class RegistrationPage{

    SetFirstName(firstName: string){
        const firstNameField = cy.get('[name=firstname');
        firstNameField.clear().type(firstName).should('have.value',firstName);
    }
    SetLastName(lastName: string){
        const lastNameField = cy.get('[name=lastname]');
        lastNameField.clear().type(lastName).should('have.value',lastName);
    }
    SetEmail(email: string){
        const emailField = cy.get('[name=email]');
        emailField.clear().type(email);
    }
    SetPassword(password: string){
        const passwordField = cy.get('[name=password]');
        passwordField.clear().type(password);
    }
    ConfirmPassword(password: string){
        const confirmField = cy.get('[id=confirm_password]');
        confirmField.clear().type(password);
    }
    ConfirmTermsAndCond(){
        const checkboxField = cy.get('[id=Field]');
        checkboxField.check({ force: true }).should('be.checked');
    }
    ClickSignIn(){
        const registerButton = cy.get('form > div.login-actions > button');
        registerButton.click();
        cy.eyesCheckWindow('Click!'); 
    }
    Register(firstName: string, lastName: string, email: string, password: string){
        
        this.SetFirstName(firstName);
        this.SetLastName(lastName);
        this.SetEmail(email);
        this.SetPassword(password);
        this.ConfirmPassword(password);
        this.ConfirmTermsAndCond();
        this.ClickSignIn();
    }
 

}