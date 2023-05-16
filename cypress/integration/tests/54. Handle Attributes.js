describe("Cypress Handle Menu Link", () => {
    it("Verifies the Length And The Text of All th Menu Link Items", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?")

        const listOfNames = []
        cy.get("div[id='carousel0'] > div>div").should('have.length', 21)
        cy.get("div[id='carousel0'] > div>div>img").each((attr) => {
            let $attributes = attr.attr('alt')
            listOfNames.push($attributes)
            listOfNames.forEach((el) => {
                cy.log(el)
            })
        })
    })
    it("Table Row", () => {
        const firstName = 'What is my color?'
        cy.visit("https://letcode.in/buttons")

        cy.contains(firstName).invoke('index').should('equal', 0)
    })

    it("Check One Of Several Attributes", () => {
        function haveOurAttribute($el) {
            if (
                $el[0].hasAttributes('class')
            ) {

            } else {
                throw new Error(('Missing Shit'))
            }
        }

        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=information/contact")
        cy.get('#form-currency > .btn-group > .dropdown-toggle').as("currency")
        cy.get("@currency").should('have.attr', 'class').and('be.oneOf', ['btn btn-link dropdown-toggle', 'shit'])
    })
    it.only("Select DOM Elements With An Attributes", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=information/contact")
        cy.get("ul[class='nav navbar-nav'] li").find(`[class]`) // `[class]` - find with attributes
        cy.get("ul[class='nav navbar-nav'] li").not(`[class]`)
    })
})