describe("CY Practise", () => {
  beforeEach(() => {
    cy.visit("https://www.globalsqa.com/");
  });

  it("cy.document", () => {
    cy.visit("https://www.globalsqa.com/");

    cy.document().then((doc) => {
      const titleTxt = doc.title;
      cy.log(titleTxt);
      expect(titleTxt).to.equal(
        "CheatSheets, Mindmaps, Free Ebooks- GlobalSQA"
      );
    });
  });

  it("cy.title", () => {
    cy.visit("https://www.globalsqa.com/");

    cy.title().then((txt) => {
      expect(txt).to.equal("CheatSheets, Mindmaps, Free Ebooks- GlobalSQA");
    });
  });

  it("Document Test - Get Width & Height", () => {
    cy.document().then((doc) => {
      const docObj = Cypress.$(doc);
      let docHeight = docObj.height();
      let docWidth = docObj.width();
      cy.log(`Screeen Height is ${docHeight}`);
      cy.log(`Screeen Width is ${docWidth}`);
      Cypress.$(doc.boby).css("background-color");
    });
  });

  it("Document Test - Set Viewport", () => {
    cy.viewport("ipad-2", "portrait");
  });

  it("Document Test - Cookies", () => {
    cy.document().then((doc) => {
      // CREATE
      doc.cookie = "username=QA Gans";
      // READ
      cy.log(doc.cookie);
      // UPDATE
      doc.cookie = "username=QA Gans Cypress";
      // CLEAR
      doc.cookie = "username=";
    });
  });

  it("Document Test - CY Cookies", () => {
    // CREATE
    cy.setCookie("Gans Cypress", "e2e FS");
    // READ
    cy.getCookie("Gans Cypress");
    // UPDATE
    cy.setCookie("Gans Cypress", "CY Selenium");
    // CLEAR
    cy.clearCookie("Gans Cypress");
  });
});
