import loginPage from "../pages/LoginPage";
import mainPage from "../pages/MainPage";

describe("Cypress Excel Integration", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.visit(Cypress.env("url"))
    })
    it("Login Thru Excel - Cy.task Excel", () => {
        const excelFilePath = "cypress/fixtures/loginSheet.xlsx"
        const sheetName = "loginSheet"

        cy.task("generateJSONFromExcel", {excelFilePath, sheetName}).then((user) => {
            const email = user[0].email
            const psw = user[0].password

            loginPage.login(email, psw)
            mainPage.validateMainPage()
        })
    })
})

// 1) Install from CLI ---> npm install node-xlsx --save-dev

// 2) Add version of 'xlsx' into package.json ---> "xlsx": "^0.16.9"
// Put the Task into 'cypress.config.json'

// 3) Add this line above into "cypress.config.json" ---> const xlsx = require("xlsx");

// on("task", {
//     generateJSONFromExcel: generateJSONFromExcel
// })

// Excel To JSON
// function generateJSONFromExcel(agrs) {
//     const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
//     const ws = wb.Sheets[agrs.sheetName];
//     return xlsx.utils.sheet_to_json(ws, { raw: false });
// }