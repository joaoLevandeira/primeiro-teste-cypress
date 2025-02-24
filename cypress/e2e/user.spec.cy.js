import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MenuPage from "../pages/menuPage.js"
import MyInfoPage from "../pages/myInfoPage.js"

  const Chance = require('chance') //chance é um site rândomico. Linha do load do site//

  const chance = new Chance()  // linha para instanciar para ser usado//
  const loginPage = new LoginPage()
  const dashboardPage = new DashboardPage()
  const menuPage = new MenuPage()
  const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {

      it('User Info Update- Sucecess',() => {
       
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      
      dashboardPage.chechDashboardPage()
      
      menuPage.accessMyInfo()

      myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
      myInfoPage.fillEmployeeDetails(`EmployeeID`, `OtherID`, `12345`, `2098-10-15`, `1984-10-15`)
      myInfoPage.fillStatus()
      myInfoPage.saveForm()
     
    }) 


  it('Login - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
}) 