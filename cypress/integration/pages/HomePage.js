/// <reference types="cypress"/>
class HomePage{

	goToTranserFunds(){
		let transfer = cy.get('#leftPanel > ul > :nth-child(3) > a')
		transfer.click()
	}
}

export default HomePage