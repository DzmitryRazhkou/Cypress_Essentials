describe("CY Practise", () => {
    it("Cypress Slider iFrame Plugin - Attribute, ", () => {
        cy.visit("https://www.globalsqa.com/demo-site/sliders/#Range");
        cy.iframe('.resp-tab-content-active > p > .demo-frame').within(() => {
            cy.get("#slider-range span:nth-child(2)").as("slider#1")
            cy.get("#slider-range span:nth-child(3)").as("slider#2")

            cy.get("@slider#1").invoke('attr', 'style', "left: 5%;")
                .should('have.attr', 'style', 'left: 5%;')

            cy.get("@slider#2").invoke('attr', 'style', "left: 92%;")
                .should('have.attr', 'style', 'left: 92%;')
        })
    });

    it("Cypress Slider iFrame Plugin - Attribute, Steps", () => {
        cy.visit("https://www.globalsqa.com/demo-site/sliders/#Steps");
        cy.iframe('.resp-tab-content-active > p > .demo-frame').within(() => {
            cy.get("#slider span:nth-child(1)").as("slider#1")

            cy.get("@slider#1").invoke('attr', 'style', "left: 50%;")
                .should('have.attr', 'style', 'left: 50%;')

        })
    });

    it("Cypress Slider iFrame Plugin - Value", () => {
        cy.visit("https://demoqa.com/slider");
        cy.get('.range-slider').invoke("val", "95").trigger("change").should("have.value", "95")
        cy.get('.range-slider').invoke('attr', 'style', "--value:95;").trigger("change").should("have.attr", "style", "--value:95;")
    });
});
