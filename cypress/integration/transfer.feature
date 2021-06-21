Feature: Transfer


	Scenario: Transfer money from account #54321 to #12456
	Given User is logged in
	And User is on Tranfer funds page 
	When User enters transfer details
	And clicks on transfer button
	Then User should see success message


