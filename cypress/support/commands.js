Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
  cy.get('#firstName').type('Priscila')
  cy.get('#lastName').type('Bellan')
  cy.get('#email').type('priscilasantosbellan@gmail.com')
  cy.get('#open-text-area').type('Teste')
  cy.get('button[type="submit"]').click()
})