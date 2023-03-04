describe("CY Practise", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Cypress Xpath", () => {
    cy.xpath("//input[@id='user-name']").type("problem_user");
    cy.xpath("//input[@id='password']").type("secret_sauce");
    cy.xpath("//input[@id='login-button']").click();
    cy.xpath("//div[@class='app_logo']").should("be.visible");
    cy.url().then((y) => {
      const urlTxt = y;
      cy.log(urlTxt);
      expect(y).to.contains("inventory.html");
    });
  });
});
