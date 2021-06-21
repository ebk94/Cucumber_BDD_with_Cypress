/// <reference types="cypress"/>

class LoginPage{

	enterUsername(value){
		const txtUsername = cy.get(':nth-child(2) > .input')
		txtUsername.clear()
		txtUsername.type(value)
		return this
	}



	enterPassword(value){
		const txtPassword = cy.get(':nth-child(4) > .input')
		txtPassword.clear()
		txtPassword.type(value)
		return this
	}

	clickLogin(){

		const btn = cy.get(':nth-child(5) > .button')
		btn.click()
	}
}

export default LoginPage