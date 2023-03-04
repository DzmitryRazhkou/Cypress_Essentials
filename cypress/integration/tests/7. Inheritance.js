class BasePage {
  static loagHomePage() {
    cy.visit("https://www.globalsqa.com/demo-site/select-dropdown-menu/");
  }

  static wait(num) {
    cy.wait(num);
  }
}

class HomePage extends BasePage {
  static scrollDown() {
    cy.contains("Mobile Testing").scrollIntoView();
  }

  static scrollUp() {
    cy.contains("Select Country").scrollIntoView();
  }
}

describe("Inheritance Between Classes", () => {
  it("Home Base Page", () => {
    HomePage.loagHomePage();
    HomePage.wait(3000);
    HomePage.scrollDown();
    HomePage.wait(3000);
    HomePage.scrollUp();
  });
});
