import userData from "../fixtures/userData.json"


describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField:"[name='password']",
    loginButton: "[type='submit']",
    sectionTittleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-upgrade-layout",
    wrongCredentialAlert: "[role=alert]",
    myInfoButton: `[href='/web/index.php/pim/viewMyDetails']`,
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateCloseButton: ".--close",
    saveButton: "[type='submit']",
  }  

 
    it.only('User Info Update- Sucecess', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location(`pathname`).should(`equal`, `/web/index.php/dashboard/index`)
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type(`FirstName Test`)
    cy.get(selectorsList.lastNameField).clear().type(`LastName Test`)
    cy.get(selectorsList.genericField).eq(3).clear().type(`Employee`)
    cy.get(selectorsList.genericField).eq(4).clear().type(`OtherId Test`)
    cy.get(selectorsList.genericField).eq(5).clear().type(`Drive Licence test`)
    cy.get(selectorsList.genericField).eq(6).clear().type(`2025-02-03`)
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(7).clear().type(`1984-15-10`)
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get(`body`).should(`contain`, `Successfully Updated`) 
    cy.get('.oxd-toast')
    })   

  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})