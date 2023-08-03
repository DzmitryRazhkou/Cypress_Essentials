describe('Test', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/selectable');
    });

    it('Fill Up Values Into Multiple Elements', () => {
        const dataArray = ['12', '50', '47']
        cy.get("multiple-el").each(($el, index) => {
            cy.wrap($el).type("{selectAll}" + dataArray[index])
        })
    });

    it('Fill Up Text Editor', () => {
        const fillUpTextEditor = (headingRemove, paragraphRemove, heading, paragraph) => {
            cy.get("text-editor").type('{backspace}'.repeat(headingRemove.length))
                .type(heading)
                .type('{moveToEnd}')
                .type('{backspace}'.repeat(paragraphRemove.length) + `${paragraph}`)
        }
    });

    it('Validate Value From Attributes', () => {
        const verifyValues = (array) => {
            const attributesValues = [];
            cy.get("text-editor").each(($el) => {
                const attributesValue = Cypress.$($el).attr('value')
                attributesValues.push(attributesValue)
            }).then(() => {
                cy.wrap(attributesValues).should('deep.equal', array)
            })
        }
        })
});