describe('Test', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/selectable');
    });
    it('Challenge Code', () => {
        //     User types address into Address Autocomplte input:
        //     Result from drop down
        function vefiryLengthListOfResults() {
            DefaultOrderFormPage.addressAutocompleteAVS.dropDownList.first().as("first-drop-down")
            DefaultOrderFormPage.addressAutocompleteAVS.dropDownList.as("address-list-drop-down")

            cy.get("@first-drop-down").invoke("text").then(($el) => {
                const result = $el
                    .replace(", ", " ").trim()
                    .replace(/\s+/g, " ").trim();
                const split = result.split(" + ");
                const restOfSplit = split[1];
                const numbersOnly = Number(restOfSplit.replace(/\D/g, ''));

                const adjustedNumbersOnly = numbersOnly > 100 ? 100 : numbersOnly; // Limit to 100 if greater

                cy.log(" <+n> RESULTS ARE: " + adjustedNumbersOnly + " <===== ");

                cy.get("@first-drop-down").click();

                cy.get("@address-list-drop-down").each(($el) => {
                    const optionTxt = $el.text();
                    cy.wrap(optionTxt).as('optionText${index}');
                }).then(($opt) => {
                    const length = $opt.length;
                    expect(length).to.equal(adjustedNumbersOnly);
                });
            });
        }

    });
});