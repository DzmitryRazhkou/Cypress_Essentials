describe('Test', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/selectable');
    });
    it('Challenge Code', () => {
        const inputString = "how to split [1311 Spruce St Apt 202 Philadelphia PA 191071311 Spruce St Philadelphia PA 19107]";
        const splitPattern = "[1311 Spruce St Apt 202 Philadelphia PA 19107]";

        const parts = inputString.split(new RegExp('\\' + splitPattern, "g"));

        console.log(parts);
    });
});