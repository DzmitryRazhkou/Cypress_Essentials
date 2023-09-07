describe('Test', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/selectable');
    });
    it('Challenge Code', () => {
        function verifyFullAddressDropDownInternational(address) {
            DefaultOrderFormPage.addressAutocompleteAVS.dropDownList.as("address-list-drop-down")
            cy.get('@address-list-drop-down').then(($el) => {
                // Sent Address To Address Autocomplete input:
                const modifiedAddress = address.replace(/(\d+-\s*|#\d+\s*|Apt\s\d+\s*)/g, '').trim();

                // Addresses From Drop-Down:
                const addresses = $el.text()
                    .replace(/,/g, '')
                    .replace(/(\d+-\s*|#\d+\s*|Apt\s\d+\s*)/g, '')
                    .trim()

                const index = addresses.indexOf(modifiedAddress);
                const firstPart = addresses.substring(0, index + modifiedAddress.length);
                const secondPart = addresses.substring(index + modifiedAddress.length);
                const splitAddress = [firstPart, secondPart];
                const cleanedUpAddresses = splitAddress.filter(item => item != '')

                cy.wrap(cleanedUpAddresses).then(splitAddressArray => {
                    if (splitAddressArray.length >= 2) {
                        expect(modifiedAddress).to.oneOf(splitAddressArray)
                    } else {
                        expect(splitAddressArray[0]).to.equal(modifiedAddress)
                    }
                })
            });
        }
    });
});