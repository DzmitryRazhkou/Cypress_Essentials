export class MainPage {
    constructor() {
        this.home = "a[href='#!/home']"
    }

    get homeBtn() {
        return cy.get(this.home)
    }

    validateMainPage() {
        this.homeBtn.should('be.visible').and("have.attr", "class", "home active")
    }
}

const mainPage = new MainPage()
export default mainPage