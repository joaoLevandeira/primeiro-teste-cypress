class DashboardPage {

        selectorsList(){
            const selectors = {
                dashboardGrid: ".orangehrm-upgrade-layout",
            }
            return selectors
        }
       chechDashboardPage(){
       cy.location(`pathname`).should(`equal`, `/web/index.php/dashboard/index`)
       cy.get(this.selectorsList().dashboardGrid).should(`be.visible`)
    }
}

export default DashboardPage