import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MenuPage from "../pages/menuPage.js"

  const loginPage = new LoginPage()
  const dashboardPage = new DashboardPage()
  const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
   
    sectionTittleTopBar: ".oxd-topbar-header-breadcrumb-module",
  
    
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    genericComboBox: ".oxd-select-text--active",
    dateCloseButton: ".--close",
    saveButton: "[type='submit']",
   }

 
    it.only('User Info Update- Sucecess', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      
      dashboardPage.chechDashboardPage()
      
      menuPage.accessMyInfo()


    /* cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    
     

    cy.get(selectorsList.firstNameField).clear().type(`FirstName Test`)
    cy.get(selectorsList.lastNameField).clear().type(`LastName Test`)
    cy.get(selectorsList.genericField).eq(3).clear().type(`Employee`)
    cy.get(selectorsList.genericField).eq(4).clear().type(`OtherId Test`)
    cy.get(selectorsList.genericField).eq(5).clear().type(`Drive Licence test`)
    cy.get(selectorsList.genericField).eq(6).clear().type(`2025-02-03`)
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(7).clear().type(`1984-15-10`)
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveButton).eq(0).click({force: true})
    cy.get(`body`).should(`contain`, `Successfully Updated`) 
    cy.get('.oxd-toast')

    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()*/
    }) 

  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
}) 