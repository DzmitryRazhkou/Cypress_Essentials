import loginPage from "../pages/LoginPage";
import mainPage from "../pages/MainPage";
import {default as xlsx} from "node-xlsx";
import fs from "fs";
import readXlsx from "../../support/read_xlsx";

describe("Cypress Excel Integration", () => {
    let rowsLength;
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();

        cy.task("readXlsx", {file: "cypress/fixtures/loginSheet.xlsx", sheet: "loginSheet"}).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
        })
        cy.visit(Cypress.env("url"))
    })
    it("Login Thru Excel - Cy.task Excel", () => {
        cy.fixture('xlsxData.json').then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                const email = data.rows[i].email
                const psw = data.rows[i].password

                loginPage.login(email, psw)
                mainPage.validateMainPage()
            }
        })

    })
})

// Please rename previous prugin variable!!!

// 1) Install from CLI ---> npm install node-xlsx --save-dev

// 2) Import variables into "cypress.config.json" --->

// const xlsx = require('node-xlsx').default;
// const fs = require('fs'); // for file
// const path = require('path'); // for file path
// const readXlsx = require('./cypress/support/read_xlsx') // watching where is located read_xlsx file

// 3) Add cy.task --->

// on('task', {
//     parseXlsx({filePath}) {
//         return new Promise((resolve, reject) => {
//             try {
//                 const jsonData = xlsx.parse(fs.readFileSync(filePath));
//                 resolve(jsonData);
//             } catch (e) {
//                 reject(e);
//             }
//         });
//     }
// });
// on('task', {
//     'readXlsx': readXlsx.read
// })

// 4) Create file under plugins to read xlsx file (Inside Support folder)

// const fs = require('fs');
// const XLSX = require('xlsx');
//
// const read = ({file, sheet}) => {
//     const buf = fs.readFileSync(file);
//     const workbook = XLSX.read(buf, {type: 'buffer'});
//     const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
//     return rows
// }
//
// module.exports = {
//     read,
// }

// 5) Create custom method  --->

// Cypress.Commands.add("parseXlsx", (inputFile) => {
//     return cy.task('parseXlsx', {filePath: inputFile})
// });



