// const cypress = require('cypress')
//Open browser and direct to specific URL
require('cypress-xpath')
// import { body } from '../e2e/RegisterTesting'


describe('Login (Test Scenario)', ()=> {
    it('Login', ()=>{
        
        let body = {
            username1 : Cypress.env('username')
        }
        
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        
        //Fill all field login
        cy.xpath('//*[@id="loginPanel"]/form/div[1]').type(body.username1)
        cy.xpath('//*[@id="loginPanel"]/form/div[2]/input').type('rules') 

        cy.xpath('//*[@id="loginPanel"]/form/div[3]/input').click()

        cy.xpath('//*[@id="rightPanel"]/p').should('have.text','An internal error has occurred and has been logged.')
    })
})