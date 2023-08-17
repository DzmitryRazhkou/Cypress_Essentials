describe('Test', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/selectable');
    });
    it('Challenge Code', () => {

        // cypress.json
        //     {
        //         "env": {
        //         "variableName": "variableValue",
        //          "apiKey": "your-api-key"
        //     }
        //  }

        // npx cypress run --env variableName=variableValue,apiKey=your-api-key
    });
    it('should use environment variables', () => {
        const variableValue = Cypress.env('variableName');
        const apiKey = Cypress.env('apiKey');

        cy.log(`Variable Value: ${variableValue}`);
        cy.log(`API Key: ${apiKey}`);
    });
    it('Class ---> Test', () => {

        // cypress.json
        //     {
        //         "env": {
        //         "variableName": "variableValue",
        //          "apiKey": "your-api-key"
        //     }
        //  }

        // npx cypress run --env variableName=variableValue,apiKey=your-api-key

        cy.get(".locator").then(($el) => {
            const res = $el.text();
            Cypress.env('result', res)
        })

        const saved = Cypress.env('result')

    });
});