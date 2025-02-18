import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MenuPage from "../pages/menuPage.js"
import MyInfoPage from "../pages/myInfoPage.js"

  const loginPage = new LoginPage()
  const dashboardPage = new DashboardPage()
  const menuPage = new MenuPage()
  const myInfoPage = new MyInfoPage()

  const selectorsList = {

      }

describe('Orange HRM Tests', () => {
 

      it.only('User Info Update- Sucecess',() => {
       
     
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      
      dashboardPage.chechDashboardPage()
      
      menuPage.accessMyInfo()

      myInfoPage.fillPersonalDetails(`first name`, `last name`, `nickname`)
      myInfoPage.fillEmployeeDetails(`EmployeeID`, `OtherID`, `12345`, `2098-10-15`, `1984-10-15`)
      myInfoPage.fillStatus()
      myInfoPage.saveForm()
    
        
    }) 


    /* 
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
     

  
    cy.get(selectorsList.dateCloseButton).click()
    
   

    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()*/


  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
}) 