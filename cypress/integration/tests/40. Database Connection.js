describe("MySQL Database Testing", () => {
    it("Get All User's Playlists Thru Database", () => {
        cy.task("queryDb", "SELECT name FROM playlists WHERE user_id = '11784'").each((res) => {
            cy.log(res)
        })
    })
})

// 1) Install Plugin MySQL: --->
// npm install mysqljs/mysql

// 2) Add Dependencies "cypress.config.json"
// 2.1) const mysql = require("mysql");

// 2.2) function queryTestDb(query, config) {
//   // create a new mysql connection using credentials from cypress.json env's
//   const connection = mysql.createConnection(config.env.db);
//
//   // start connection to db
//   connection.connect();
//
//   // exec query + disconnect to db as a Promise
//   return new Promise((resolve, reject) => {
//     connection.query(query, (error, results) => {
//       if (error) reject(error);
//       else {
//         connection.end();
//         return resolve(results);
//       }
//     });
//   });
// }

// 2.3)   e2e: {
//     setupNodeEvents(on, config) {
//       module.exports = (on, config) => {};
//
//       on("task", {
//         queryDb: (query) => {
//           return queryTestDb(query, config);
//         },
//       });
//     },

// 2.4)     env: {
//          url: "https://bbb.testpro.io",

//          db: {
//             host: "104.237.13.60",
//             user: "dbuser01",
//             password: "pa$$01",
//             database: "dbkoel",
//          },
//      },
//

//     retries: {
//         runMode: 2,
//     },

