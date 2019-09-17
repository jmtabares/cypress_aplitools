export class LoginPage{
        
    OpenBrowser(url: string){
        cy.visit(url)
        cy.eyesCheckWindow('Main Page');
        //browser.get(url);
        //browser.driver.manage().window().maximize()

    }
    SetLoginUserName(userName: string){
        const userName_field =  cy.get('[name=email]');
        userName_field.clear().type(userName);
    }
    SetLoginPassword(password: string){
        const password_field = cy.get('[name=password]');
        password_field.clear().type(password);
    }
    ClickSignIn(){
        const signIn =  cy.get("[class='button btn btn-success btn-large']");
        signIn.click();
    }
    ClickRegister(){
        const registration = cy.get('[data-ui-sref=signup]');
        registration.click(); 
        cy.eyesCheckWindow('Click!');

    }
    Login(userName: string, password: string){
        this.SetLoginUserName(userName);
        this.SetLoginPassword(password);
        this.ClickSignIn();
    }
}