/// <reference types="cypress"/>

import	HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import Transfer from '../pages/TransferPage'


Given('User is logged in', function () {
	cy.visit('https://parabank.parasoft.com/parabank/index.htm')
	const login = new LoginPage()
	login.enterUsername('john')
	login.enterPassword('demo')
	login.clickLogin()
})

And('User is on Tranfer funds page', function(){
	const home = new HomePage()
	home.goToTranserFunds()
})

When('User enters transfer details', function(){
	const tr = new Transfer()
	tr.enterAmount(500)
	tr.fromAcc('54321')
	tr.toAcc('12456')
}) 

And('clicks on transfer button', function(){
	const tr = new Transfer()
	tr.clickTransfer()
}) 

Then('User should see success message', function(){
	cy.get('#rightPanel').contains('Transfer Complete!')
})  