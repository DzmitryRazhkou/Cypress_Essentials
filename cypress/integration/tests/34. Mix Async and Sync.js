describe("Mix Async and Sync", () => {
    beforeEach(() => {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?")
    })

    it("Cypress Async and Sync Callback", () => {
        //     Create a Collection Variable to store all the anchor tags
        let arr = []
        //     Find all the anchor tags ans store their text in the collection variable created above
        cy.get("a").each((el) => {
            arr.push(el.text())
        }).then(() => {
            //     Print the count of anchor tags and join the array
            cy.log(`Anchor Tag Count - ${arr.length}`)
            cy.log(`Anchor Tags Text String - ${arr.join(", ")}`)
        })
    })

    it("Cypress Async and Sync Alias", () => {
        //     Create a Collection Variable to store all the anchor tags
        let arr = []
        //     Find all the anchor tags ans store their text in the collection variable created above
        cy.get("a").each((el) => {
            arr.push(el.text())
        }).as("myarr")

        cy.get("@myarr").then(() => {
            //     Print the count of anchor tags and join the array
            cy.log(`Anchor Tag Count - ${arr.length}`)
            cy.log(`Anchor Tags Text String - ${arr.join(", ")}`)
        })
    })

    it("Cypress Async and Sync Alias Another Way", () => {
        //     Create a Collection Variable to store all the anchor tags
        let arr = []
        //     Find all the anchor tags ans store their text in the collection variable created above
        cy.get("a").then((els) => {
            for (let index = 0; index < els.length; index++) {
                arr.push(Cypress.$(els[index]).text())
            }
            return arr;
        })

            .then((myarr) => {
                //     Print the count of anchor tags and join the array
                cy.log(`Anchor Tag Count - ${myarr.length}`)
                cy.log(`Anchor Tags Text String - ${myarr.join(", ")}`)
            })
    })

    it("Loop Usage and Break Loop", () => {
        let array = [...Array(10).keys()]
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 5) {
                break
            }
            cy.log(array[i])
        }
    })
})