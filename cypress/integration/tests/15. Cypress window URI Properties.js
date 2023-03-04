describe("CY Practise", () => {
  before(() => {
    cy.visit("https://www.globalsqa.com/");
  });

  it("Window Test Commands - URI Properties", () => {
    cy.window().should((win) => {
      const loc = win.location;
      //   expect(loc.hash).to.eql("https://www.globalsqa.com/");
      expect(loc.host).to.deep.equal("www.globalsqa.com");
      expect(loc.pathname).to.equal("/");
      expect(loc.protocol).to.equal("https:");
    });
  });

  it("CY Test Commands", () => {
    cy.hash().should("eq", "");
    cy.location("host").should("eq", "www.globalsqa.com");
    cy.location("pathname").should("eq", "/");
    cy.location("protocol").should("eq", "https:");
  });

  it("CY Window - Reload", () => {
    cy.window().should((win) => {
      win.location.reload();
    });
  });

  it("CY Window - Back", () => {
    cy.contains("Contact Us").click();
    cy.window().should((win) => {
      win.history.back();
    });
  });

  it.only("CY Local Storage", () => {
    cy.window().should((win) => {
      expect(win.localStorage.length).to.be.eql(2);

      win.localStorage.setItem("Name", "QA Gans");
      expect(win.localStorage.getItem("Name")).to.eql("QA Gans");
    });
  });
});
