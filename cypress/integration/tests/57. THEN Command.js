describe('Variables & Aliases Demo', function () {
    beforeEach(function () {
        cy.visit('https://www.globalsqa.com/demo-site/dialog-boxes/')
    })
    it("Closures & Variables", () => {
        cy.get("iframe[class='demo-frame lazyloaded']").as("frame")
        // Scrol To Element:
        cy.get("@frame").scrollIntoView()
        //     Handle iFrame:
        cy.get("@frame").should('be.visible').then(($frame) => {
            const $body = $frame.contents().find("body")
            cy.wrap($body).find("table[id='users']>tbody>tr>td:nth-of-type(2)").then(($email) => {
                const emailTxt = $email.text()
                cy.log(emailTxt);
            })
        })

    })
    it("Alias DEMO", () => {
        cy.get("iframe[class='demo-frame lazyloaded']").as("frame")
        // Scrol To Element:
        cy.get("@frame").scrollIntoView()
        //     Handle iFrame:
        cy.get("@frame").should('be.visible').then(($frame) => {
            const $body = $frame.contents().find("body")
            cy.wrap($body).find("table[id='users']>tbody>tr>td:nth-of-type(2)").then(($email) => {
                const txt = $email.text()
                cy.log(txt);
                cy.wrap(txt).as("wrapTxt")
            })
        })
    })
    it("Share Content", function () {
        cy.log("Shared Content ===> " + this.wrapTxt)
    })
})