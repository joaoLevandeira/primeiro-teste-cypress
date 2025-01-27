import userData from "../fixtures/userData.json"


describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField:"[name='password']",
    loginButton: "[type='submit']",
    sectionTittleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-upgrade-layout",
    wrongCredentialAlert: "[role=alert]"
  }  

 
    it('Login - Sucecess', () => {

    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location(`pathname`).should(`equal`, `/web/index.php/dashboard/index`)
    cy.get(selectorsList.dashboardGrid)
   })               
  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})