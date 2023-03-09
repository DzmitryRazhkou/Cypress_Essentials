import {mainPage} from "../../support/selectors";

export class Main_Page {
    constructor() {
        this.home = mainPage.home
    }

    get homeBtn() {
        return cy.get(this.home)
    }

    validateMainPage() {
        this.homeBtn.should('be.visible').and("have.attr", "class", "home active")
    }
}

const main_Page = new Main_Page()
export default main_Page