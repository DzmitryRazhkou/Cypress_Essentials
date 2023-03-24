const {log} = require("mochawesome/src/utils");
describe("Three Way Getting Element Visible", () => {
    beforeEach(() => {
        cy.visit("https://letcode.in/edit")
    })
    it('Cypress Way', function () {
        cy.get("input[id='fullName']").should('be.visible')
    });
    it('Cypress JQuery', function () {
        cy.get("input[id='fullName']").should(($el) => {
            if (!Cypress.dom.isVisible($el)) {
                throw new Error('Invisible')
            }
        })
    });
    it('Cypress Third Way', function () {
        cy.get("input[id='fullName']").should('satisfy', Cypress.dom.isVisible)
    });
    it(':has() -> :contains()', function () {
        cy.get("div[class='card-content']>div:has(label)")
        cy.contains("div[class='card-content']>div", "What is inside the text box")
        cy.get('.label:contains("What is inside the text box")')
    });
    it('Get Value All Field', function () {
        cy.get("div[class='card-content']>div>div>input").then(($inputs) => Cypress._.map($inputs, (el) => el.value)).then(console.log)
    });
    it.only('Check Visibility Of Many Elements', function () {
        cy.get("div[class='card-content']>div>div>input").then(($el) => Cypress._.map($el, Cypress.dom.isVisible)).should('deep.equal', [true, true, true, true, true, true])

        //     Or

        // cy.get("div[class='card-content']>div>div>input").map(Cypress.dom.isVisible).should('deep.equal', [true, true, true, true, true, true])
    });
})