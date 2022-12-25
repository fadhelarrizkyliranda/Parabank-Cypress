//Open browser and direct to specific URL
require('cypress-xpath')
let body = {
    fname : Cypress.env('fname'),
    lname : Cypress.env('lname'),
    street : Cypress.env('street'),
    city : Cypress.env('city'),
    state : Cypress.env('state'),
    zipcode : Cypress.env('zipcode'),
    pnumber : Cypress.env('pnumber'),
    ssn : Cypress.env('ssn'),
    username : Cypress.env('username'), 
    pass : Cypress.env('pass'),
    rpass : Cypress.env('rpass')

}
export {body};


describe('Register (Test Scenario)', ()=> {
    it('All field blank', ()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        
        //Click Register
        cy.xpath('//*[@id="loginPanel"]/p[2]/a').click()
        cy.url().should('include','/register.htm')
        
        //Click button Register
        cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click()

        //Checking error message
        cy.xpath('//*[@id="customer.firstName.errors"]').should('have.text','First name is required.')
        cy.xpath('//*[@id="customer.lastName.errors"]').should('have.text','Last name is required.')
        cy.xpath('//*[@id="customer.address.street.errors"]').should('have.text','Address is required.')
        cy.xpath('//*[@id="customer.address.city.errors"]').should('have.text','City is required.')
        cy.xpath('//*[@id="customer.address.state.errors"]').should('have.text','State is required.')
        cy.xpath('//*[@id="customer.address.zipCode.errors"]').should('have.text','Zip Code is required.')
        cy.xpath('//*[@id="customer.ssn.errors"]').should('have.text','Social Security Number is required.')
        cy.xpath('//*[@id="customer.username.errors"]').should('have.text','Username is required.')
        cy.xpath('//*[@id="customer.password.errors"]').should('have.text','Password is required.')
        cy.xpath('//*[@id="repeatedPassword.errors"]').should('have.text','Password confirmation is required.')
        
    })

    it('Register new account', ()=> {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        //Click Register
        cy.xpath('//*[@id="loginPanel"]/p[2]/a').click()
        cy.url().should('include','/register.htm')

        //Fill all field
        cy.xpath('//*[@id="customer.firstName"]').type(body.fname)
        cy.xpath('//*[@id="customer.lastName"]').type(body.lname)
        cy.xpath('//*[@id="customer.address.street"]').type(body.street)
        cy.xpath('//*[@id="customer.address.city"]').type(body.city)
        cy.xpath('//*[@id="customer.address.state"]').type(body.state)
        cy.xpath('//*[@id="customer.address.zipCode"]').type(body.zipcode)
        cy.xpath('//*[@id="customer.phoneNumber"]').type(body.pnumber)
        cy.xpath('//*[@id="customer.ssn"]').type(body.ssn)
        cy.xpath('//*[@id="customer.username"]').type(body.username)
        cy.xpath('//*[@id="customer.password"]').type(body.pass)
        cy.xpath('//*[@id="repeatedPassword"]').type(body.rpass)

        //Click button Register
        cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click()

        cy.xpath('//*[@id="leftPanel"]/p').should('have.text','Welcome '+body.fname +" "+body.lname)

    })

    it('Register account with condition that account already exits', ()=> {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        //Click Register
        cy.xpath('//*[@id="loginPanel"]/p[2]/a').click()
        cy.url().should('include','/register.htm')

        //Fill all field
        cy.xpath('//*[@id="customer.firstName"]').type(body.fname)
        cy.xpath('//*[@id="customer.lastName"]').type(body.lname)
        cy.xpath('//*[@id="customer.address.street"]').type(body.street)
        cy.xpath('//*[@id="customer.address.city"]').type(body.city)
        cy.xpath('//*[@id="customer.address.state"]').type(body.state)
        cy.xpath('//*[@id="customer.address.zipCode"]').type(body.zipcode)
        cy.xpath('//*[@id="customer.phoneNumber"]').type(body.pnumber)
        cy.xpath('//*[@id="customer.ssn"]').type(body.ssn)
        cy.xpath('//*[@id="customer.username"]').type(body.username)
        cy.xpath('//*[@id="customer.password"]').type(body.pass)
        cy.xpath('//*[@id="repeatedPassword"]').type(body.rpass)

        //Click button Register
        cy.xpath('//*[@id="customerForm"]/table/tbody/tr[13]/td[2]/input').click()

        cy.xpath('//*[@id="customer.username.errors"]').should('have.text','This username already exists.')

    })
})