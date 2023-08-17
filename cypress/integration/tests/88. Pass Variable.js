//  // / cypress/plugins/index.ts
// export default (on, config) => {
//     on('task', {
//         setUserData: (userData: UserDataType) => {
//             global.userData = userData;
//             return null;
//         },
//         getUserData: () => {
//             return global.userData;
//         },
//     });
// };
//     // then in test case we can do:
//
// // cypress/integration/login.spec.ts
//     describe('Login', () => {
//         it('should work', () => {
//             cy.visit('/login-page');
//             cy.intercept('api/login-endpoint').as('postLogin');
//             // login interactions
//             cy.wait('@postLogin').then((interception) => {
//                 // intercept user data and store it in global variable
//                 cy.task('setUserData', JSON.parse(interception.response.body));
//             });
//             // ... further assertions
//         });
//     });
//     // later we can retrieve this data easily:
//
// // cypress/integration/otherTest.spec.ts
//     describe('Other test', () => {
//         it('uses user data', () => {
//             cy.task('getUserData').then((userData: UserDataType) => {
//                 console.log(userData);
//                 // voila! Stored data between two .spec files
//             });
//         });
//     });
// }