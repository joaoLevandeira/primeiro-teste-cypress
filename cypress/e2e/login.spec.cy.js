describe('Orange HRM Tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField:"[name='password']",
    loginButton: "[type='submit']",
    sectionTittleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role=alert]"
  }
  it('Login - Sucecess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location(`pathname`).should(`equal`, `/web/index.php/dashboard/index`)
    cy.get(selectorsList.sectionTittleTopBar).contains(`Dashboard`)
   })               
  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})