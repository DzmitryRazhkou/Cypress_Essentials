describe("CY Practise", () => {
    it("Handle Text By Using 'invoke('text')'", () => {
        cy.visit("https://www.globalsqa.com/");
        cy.get(".icon_loc")
            .invoke("text")
            .then(($el) => {
                expect($el).to.equal("146, VP Block, Pitampura, New Delhi-110034");
            });
    });

    it("Handle Text By Using 'JQuery'", () => {
        cy.visit("https://www.globalsqa.com/");
        cy.get(".icon_loc").then((txt) => {
            let fs = txt.text();
            expect(fs).to.equal("146, VP Block, Pitampura, New Delhi-110034");
        });
    });

    it("Concat Text", () => {
        cy.visit("https://letcode.in/alert");
        cy.contains("button:contains('Simple Alert')").as("f")
        cy.contains('button', "Simple Alert").invoke('text').as('sa')
        cy.contains('button', "Prompt Alert").invoke('text').as('pa')
        cy.contains('button', "Modern Alert").invoke('text').as('ma')
        cy.then(function () {
            const txt = `${this.sa} ${this.pa} ${this.ma}`
            cy.log(txt)
            expect(txt).to.equal('Simple Alert Prompt Alert Modern Alert')
        })
    });

    it("Number Validate", () => {
        cy.visit("https://www.toolsqa.com/selenium-training/");
        cy.get(':nth-child(2) > .contact-detail').scrollIntoView()
        cy.get(':nth-child(2) > .contact-detail').should('have.prop', 'class')
        const value = cy.get(':nth-child(2) > .contact-detail').then(($el) => {
            let txt = $el.text()
            cy.log(txt);
            expect(txt).to.match(/^\+\d{1,2}-\d{9}/)

            //     ^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
        })
        // cy.get(':nth-child(2) > .contact-detail').should("match", /^\d{9}$/)
    });

    it("Get Text From A List Of Elements", () => {
        const list = ['Chocolate', 'Apple', 'Eggs', 'Corn']
        const getText = ($el) => {
            return Cypress._.map(($el, 'innerText'))
        }


        cy.visit("https://letcode.in/table");
        cy.get('#shopping>tbody>tr>td:nth-child(1)').then(($el) => {
            return Cypress._.map($el, 'innerText')
        }).should('deep.equal', list)
        //
        // cy.get('#shopping>tbody>tr>td:nth-child(1)').should('have.length', 4).then(getText)
        //     .should('deep.equal', list)
    });
    it.only("Get Multiple Values From The Page Via Aliases And Test Context Properties", () => {
        cy.visit("https://letcode.in/selectable");

        function getFormTxt() {
            cy.get(':nth-child(1) > #clour').invoke('text').as("first")
            cy.get('#container > :nth-child(6)').invoke("text").as("second")
            return cy.then(function () {
                return {
                    f: this.first,
                    s: this.second
                }
            })
        }

        getFormTxt().should('deep.equal', {
            f: "Selenium",
            s: "Cypress"
        })

    });
    it('Confirm The Total Sum Shown Under the Table', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("table[id='product']>tbody>tr>td:nth-child(3)").as("price")

        cy.get("@price").should('have.length', 19)
            .then(($cells) => {
                const totals = $cells.map((el) => el.innerText)
                const sum = Cypress._.sum(totals)
                cy.log(sum)
            })

    });
    it.skip('Confirm The Total Sum Shown Under the Table', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("table[id='product']>tbody>tr>td:nth-child(3)").as("price")

        cy.get("@price").should('have.length', 19)
            .then(($cells) => {
                const text = [...$cells].map((el) => el.innerText)
                const found = text.includes("Lemon")
                return found
            }).then(found => {
            if (!found) {
            //
            }
        })
    });

});
