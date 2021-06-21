/// <reference types="cypress"/>
class Transfer{
	enterAmount(value){
		cy.wait(5000)
		const amount = cy.get('#amount')
		amount.clear()
		amount.type(value)
		return this
	}

	fromAcc(value){
		// white space sensitive
		// Both of the method works
		//cy.get('#fromAccountId').select(value).should('have.value', value)

		// this uses eq(index) indexing
		//cy.intercept('#fromAccountId').as('select')
		cy.get('select').eq(1).select(value).should ('have.value', value)

		return this
	}

	toAcc(value){
		const receiver = cy.get('#toAccountId').select(value).should('have.value', value)
		return this
	}

	clickTransfer(){
		const btn = cy.get(':nth-child(4) > .button')
		btn.click()
	}

	//id="rightPanel"
}

export default Transfer