describe("CY Practise", () => {
    beforeEach(() => {
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
    })

    it("JS Alert 'cy.on('window:alert')'", () => {
        cy.get("button[onclick='jsAlert()']").click();
        cy.on("window:alert", (str) => {
            expect(str).to.equal("I am a JS Alert");
        });
    });
    it("JS Alert 'cy.stub('window:alert')'", () => {
        cy.get("button[onclick='jsAlert()']").click();

        const stub = cy.stub();
        stub.onFirstCall().returns(true);

        cy.on("window:alert", stub)
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWithExactly("I am a JS Alert");
            });
    });
    it("JS Confirm 'Cypress Stub'", () => {
        cy.window().then((win) => {
            cy.stub(win, 'confirm').as("alert")
        })
        cy.get("button[onclick='jsConfirm()']").click();
        cy.get("@alert").should('have.been.calledOnceWith', "I am a JS Confirm")
    });
    it("JS Confirm 'cy.on('window:confirm')'", () => {
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on("window:confirm", (str) => {
            expect(str).to.equal("I am a JS Confirm");
        });
    });
    it("JS Confirm 'cy.stub('window:confirm')'", () => {
        cy.get("button[onclick='jsConfirm()']").click();
        const stub = cy.stub();
        cy.on("window:confirm", stub).then(() => {
            expect(stub.getCall(0)).to.be.calledWithExactly("I am a JS Confirm");
        });
    });
    it("JS Prompt 'cy.stub('window:prompt')'", () => {
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("XE");
            cy.get("button[onclick='jsPrompt()']");
        });
    });
});
