//*

// 1) Mocha -> mocha: npm install --save-dev
//
// 2) cypress-multi-reporters: -> npm install cypress-multi-reporters --save-dev
//
// 3) Mochawesome Reporter: -> npm install mochawesome -- save-dev
//
// 4) Mochawesome-merge: -> npm install mochawesome-merge --save-dev
//
// 5) Mochawesome-report-generator: -> npm install mochawesome-report-generator -- save-dev
//

//
// Install All The Above Ones:
// ============> STEP BY STEP <==========

// 1) Install all the above ones: - npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
// THEN CAN OPEN "package.json" AND SEE:
// "mochawesome": "^7.1.3",
// "mochawesome-merge": "^4.2.2",
// "mochawesome-report-generator": "^6.2.0"

// 2) Add Reporter Settings in "cypress.config.json"

//    "reporter": "cypress-multi-reporters",
//    "reporterOptions": {
//       "reporterEnabled": "mochawesome",
//           "mochawesomeReporterOptions": {
//           "reportDir": "cypress/results/mochawesome",
//                "quite": true,
//                "overwrite": false,
//                "html": false,
//                "json": true
//     }
// }

// 3) Add Scripts:

//   WINDOWS:
//     "clean:reports": "if exist cypress\\reports rmdir /s/q cypress\\reports && mkdir cypress\\reports && mkdir cypress\\reports\\mochareports",
//     "pretest": "npm run clean:reports",
//     "scripts": "cypress run",
//     "combine-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochareports/report.json",
//     "generate-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports",
//     "posttest": "npm run combine-reports && npm run generate-report",
//     "test": "npm run scripts || npm run posttest",

//   MAC:
//     "clean:reports": "rm -R -f cypress/reports && mkdir cypress/reports && mkdir cypress/reports/mochareports",
//     "pretest": "npm run clean:reports",
//     "scripts": "cypress run",
//     "combine-reports": "mochawesome-merge cypress/reports/mocha/*.json > cypress/reports/mochareports/report.json",
//     "generate-report": "marge cypress/reports/mochareports/report.json -f report -o cypress/reports/mochareports",
//     "posttest": "npm run combine-reports && npm run generate-report",
//     "test": "npm run scripts || npm run posttest"

// MY APPROACH:
//     "delete-junit-report": "rm -rf cypress/results/junit/results.xml",
//     "delete-results": "rm -rf cypress/results/* || true",
//     "mochawesome-merge": "npx mochawesome-merge cypress/results/mochawesome/*.json > mochawesome.json && npx marge mochawesome.json",
//     "delete-mochawesome-report": "rm -rf mochawesome-report/* || true",

// EXAMPLE:
//     "cy:smokeSuite": "npm run delete-junit-results && npm run delete-mochawesome-report && "npm run <cy:recordDashboard>" && mochawesome-merge",

// 4) Add Screenshots of failed test cases to report: --> change screenshot path into "cypress.config.json"

//     video: false,
//     screenshotsFolder: "cypress/reports/screenshots",

// 5) Add The Following code Into Cypress --> to support/e2e.js

// Cypress.on("test:after:run", (test, runnable) => {
//     if (test.state === "failed") {
//         const screenshot = 'screenshots/$(Cypress.spec.name)/$(runnable.parent.title) -- ${test.title} (failed).png'
//         addContext({test}, screenshot)
//     }
// })



