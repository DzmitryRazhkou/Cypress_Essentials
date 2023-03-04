import loginPage from "../pages/LoginPage";
import mainPage from "../pages/MainPage";

const neatCSV = require('neat-csv');

describe("Read CSV", () => {
    let table;
    before(() => {
        cy.fixture("loginSheet.csv").then(neatCSV) // convert csv file an object
            .then((data) => {
                table = data;
            }).then(console.table)
    })

    it("Fill Input Fields Using CSV Data", () => {
        cy.visit(Cypress.env("url"))

        const randomRow = table.length

        for (let i = 0; i < randomRow; i++) {
            const emailId = table[i]['email']
            const psw = table[i]['password']

            loginPage.login(emailId, psw)
            // mainPage.validateMainPage()
        }
    })
})

// 1) Install from CLI ---> npm install neat-cvs@v5 --save-dev

// 2) Import into test file --->
// import neatCsv from 'neat-csv';
