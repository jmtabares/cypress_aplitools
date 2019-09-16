describe('My first test',()=>{

    it('Navigate to e site',() => {
        cy.visit('http://executeautomation.com/demosite/Login.html')
        
    })
    it('Login to app', () => {
        cy.get('input[name=UserName]').type("admin")
        cy.get('input[name=Password]').type("password")
        cy.get('input[name=Login]').click()
    })
    it("Enter user details", () =>{
        cy.get('#TitleId').select('Ms.')
        cy.get('#Initial').type('JT')
        cy.get('#FirstName').type('Jair.')
        cy.get('input[name=Hindi]').click()
    })
})