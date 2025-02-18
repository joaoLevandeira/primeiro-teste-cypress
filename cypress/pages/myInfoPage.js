class MyInfoPage {

    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='middleName']",
            genericField: ".oxd-input--active",
            genericComboBox: ".oxd-select-text--active",
            dateCloseButton: ".--close",
            saveButton: "[type='submit']",
        }

        return selectors
    }
         
    fillPersonalDetails(firstName,lastName){        
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
   /* cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)*/
    }

    fillEmployeeDetails(EmployeeID, OtherID, DriveLicence, LicenseExpiry,DateBirth){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(EmployeeID)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(OtherID)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(DriveLicence)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(LicenseExpiry)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(7).clear().type(DateBirth)
    }
    
    saveForm(){
        cy.get(this.selectorsList().saveButton).eq(0).click({force: true})
        cy.get(`body`).should(`contain`, `Successfully Updated`) 
        cy.get('.oxd-toast')
    }

    fillStatus(){

    }
}
    export default MyInfoPage