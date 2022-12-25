const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl : 'https://parabank.parasoft.com/parabank/index.htm',
        specPattern : "cypress/support/e2e",
        supportFile : false,
    }
    ,
    env: {
        fname : "admin",
        lname : "login",
        street : "jakarta",
        city : "jakarta",
        state : "jakarta",
        zipcode : "12345",
        pnumber : "12345",
        ssn : "12345",
        username : "adminsanber", //Change first if you register for the first time
        pass : "rules",
        rpass : "rules"
    }
})