// 1) npm i -D @shelex/cypress-allure-plugin

// 2) (After Cypress 10) Use defineConfig and setupNodeEvents inside config.js\config.ts files:
//
//     const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// // import allureWriter from "@shelex/cypress-allure-plugin/writer";
//
// module.exports = defineConfig({
//     e2e: {
//         setupNodeEvents(on, config) {
//             allureWriter(on, config);
//             return config;
//         }
//     }
// });

// 3) (After Cypress 10) use defineConfig and setupNodeEvents inside config.js\config.ts files:
// const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// // import allureWriter from "@shelex/cypress-allure-plugin/writer";
//
// module.exports = defineConfig({
//     e2e: {
//         setupNodeEvents(on, config) {
//             on('file:preprocessor', webpackPreprocessor);
//             allureWriter(on, config);
//             return config;
//         },
//         env: {
//             allureReuseAfterSpec: true
//         }
//     }
// });

// 4) Register commands in cypress/support/index.js (or cypress/support/e2e.js for cypress 10+) file:
//
// with import:
// import '@shelex/cypress-allure-plugin';
// with require:
// require('@shelex/cypress-allure-plugin');