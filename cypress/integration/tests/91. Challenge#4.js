describe('Test', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/selectable');
    });
    it('Challenge Code', () => {
        const inputString = "Eilenbergstraat 174 Tilburg Noord-Brabant 5011 EB";
        const wordsToRemove = 3;

        const wordsArray = inputString.split(" ");
        const shortenedString = wordsArray.slice(0, wordsArray.length - wordsToRemove).join(" ");

        console.log(shortenedString);
    });
});