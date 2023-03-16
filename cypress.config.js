const {defineConfig} = require("cypress");
const {faker} = require('@faker-js/faker'); /// See this shit
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
const mysql = require("mysql")
const XLSX = require("xlsx") // "xlsx": "^0.18.5"

const xlsx = require('node-xlsx').default;
const fs = require('fs'); // for file
const path = require('path'); // for file path
const readXlsx = require('./cypress/support/read_xlsx')

module.exports = defineConfig({
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 30000,
    failOnStatusCode: false,
    screenshotOnRunFailure: true,
    video: false,
    screenshotsFolder: "cypress/reports/screenshots",
    experimentalWebKitSupport: true,

    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome", "mochawesomeReporterOptions": {
            "reportDir": "cypress/results/mochawesome", "quite": true, "overwrite": false, "html": false, "json": true
        }
    },


    env: {
        url: "https://bbb.testpro.io",
        db: {
            host: "104.237.13.60",
            user: "dbuser01",
            password: "pa$$01",
            database: "dbkoel",
        },
        database: {
            host: "localhost",
            user: "root",
            password: "",
            database: "Cypress Test",
        },
    },

    retries: {
        runMode: 2,
    },

    e2e: {
        setupNodeEvents(on, config) {
            on("task", {
                queryDb: (query) => {
                    return queryTestDb(query, config);
                },
            });
            on("task", {
                queryDatabase: (query) => {
                    return queryTestDatabase(query, config);
                },
            });

            on('task', {downloadFile})
            require("cypress-failed-log/on")(on);
            on("task", {
                emailRegistration() {
                    return {
                        email: faker.internet.email(),
                    };
                },
            });
            on("task", {
                login() {
                    return {
                        email: faker.internet.email(),
                        password: faker.internet.password()
                    };
                },
            });
            on("task", {
                customShit(msg) {
                    console.log(msg)
                    return "OK"
                }
            });
            on("task", {
                generateJSONFromExcel: generateJSONFromExcel
            });
            on('task', {
                parseXlsx({filePath}) {
                    return new Promise((resolve, reject) => {
                        try {
                            const jsonData = xlsx.parse(fs.readFileSync(filePath));
                            resolve(jsonData);
                        } catch (e) {
                            reject(e);
                        }
                    });
                }
            });
            on('task', {
                'readXlsx': readXlsx.read
            })
        },

        specPattern: "cypress/integration/tests/*.js",
    },
});

function queryTestDb(query, config) {
    // create a new mysql connection using credentials from cypress.json env's
    const connection = mysql.createConnection(config.env.db);

    // start connection to db
    connection.connect();

    // exec query + disconnect to db as a Promise
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) reject(error);
            else {
                connection.end();
                return resolve(results);
            }
        });
    });
}
function queryTestDatabase(query, config) {
    // create a new mysql connection using credentials from cypress.json env's
    const connection = mysql.createConnection(config.env.database);

    // start connection to db
    connection.connect();

    // exec query + disconnect to db as a Promise
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) reject(error);
            else {
                connection.end();
                return resolve(results);
            }
        });
    });
}

function custom(msg) {
    cy.log(msg)
    return "OK"
}

// Excel To JSON
function generateJSONFromExcel(agrs) {
    const wb = XLSX.readFile(agrs.excelFilePath, {dateNF: "mm/dd/yyyy"});
    const ws = wb.Sheets[agrs.sheetName];
    return XLSX.utils.sheet_to_json(ws, {raw: false});
}