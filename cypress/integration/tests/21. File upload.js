describe("CY Practise", () => {
  beforeEach(() => {
    cy.visit("http://localhost:7080/upload");
  });

  it("Cypress File Upload", () => {
    cy.get("#file-upload").attachFile({
      filePath: "example.json",
      fileName: "saucedemo.json",
      lastModified: new Date().getTime(),
    });
    cy.get("#file-submit").click();
    cy.get("h3").should("have.text", "File Uploaded!");
  });
});
