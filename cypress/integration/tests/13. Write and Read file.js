const sauce = require("../../fixtures/saucedemo.json");

describe("CY Practise", () => {
  it("Cypress Write File", () => {
    cy.writeFile("simple file.txt", "Philadelphia, PA\n");
    cy.writeFile("simple file.txt", "San Francosco, CA\n", { flag: "a+" });
    cy.writeFile("simple file.txt", "Miami, FL\n", { flag: "a+" });

    cy.writeFile("cypress/fixtures/example.json", {
      city: "Philadelphia",
      state: "PA",
      zipCode: 19121,
    });
  });

  it("Cypress Read File", () => {
    cy.readFile("simple file.txt").should("be.exist").and("contains", "Phil");

    cy.fixture("example").then((profile) => {
      expect(profile.city).to.equal("Philadelphia");
    });
  });

  it("Sauce Demo", () => {
    let locators = {
      userNameField: () => cy.get("#user-name"),
      pswField: () => cy.get("#password"),
      loginBtn: () => cy.get('[data-test="login-button"]'),
    };
    cy.visit("https://www.saucedemo.com/");
    locators.userNameField().type(sauce.login.userName);
    locators.pswField().type(sauce.login.psw);
    locators.loginBtn().click();
    cy.url().then((f) => {
      cy.log(f);
      expect(f).to.include("inventory");
    });
  });
});
