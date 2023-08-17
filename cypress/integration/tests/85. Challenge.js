describe('Test', () => {
    beforeEach(() => {
        cy.visit('https://letcode.in/selectable');
    });

    it('Challenge Code', () => {
    //     User types address into Address Autocomplte input:
    //     Result from drop down

        function verifyFullAddressDropDownInternational(address) {
            DefaultOrderFormPage.addressAutocompleteAVS.dropDownList.as("address-list-drop-down")
            cy.get("@address-list-drop-down").then(($el) => {
                const length = $el.length
                const array = []

                const cleanedUpAddress = address.replace(/(\d+-\s*|#\d+\s*|Apt\s\d+\s*)/g, '').trim();

                if (length >= 2) {
                    cy.get('@address-list-drop-down').then(($el) => {
                        const addresses = $el.text().replace(/,/g, "").trim();
                        const cleanedAddresses = addresses.split('\n').map((address) => {
                            return address.replace(/-/g, ' ').trim();
                        });

                        console.log(cleanedAddresses)
                            ['4 Place Ville Marie Montreal QC H3B 2E7', '', '', '4 Place Ville Marie Montreal QC H3B 2E7']

                        const cleanedArray = cleanedAddresses.filter(item => item !== '');
                        array.push(...cleanedArray);
                        expect(array).to.include(cleanedUpAddress);
                    })
                } else {
                    cy.get('@address-list-drop-down').then(($el) => {
                        const result = $el.text().replace(/,/g, "").trim()
                        cy.log(result)
                        expect(cleanedUpAddress).to.equal(result)
                    })
                }
            })
        }


    });
    it('Optimized Code', () => {
        //     User types address into Address Autocomplte input:
        //     Result from drop down
        function verifyFullAddressDropDownInternational(address) {
            DefaultOrderFormPage.addressAutocompleteAVS.dropDownList.as("address-list-drop-down")
            cy.get('@address-list-drop-down').then(($el) => {
                const cleanedUpAddress = address.replace(/(\d+-\s*|#\d+\s*|Apt\s\d+\s*)/g, '').trim();

                const addresses = $el.text().replace(/,/g, '').trim();    // Get All Text (With All whitespaces_\n)
                const cleanedAddresses = addresses.split('\n')   // Array
                    .map(address => address
                        .replace(/(\d+-\s*|#\d+\s*|Apt\s\d+\s*)/g, '')
                        .replace(/-/g, ' ')
                        .trim());

                if (cleanedAddresses.length >= 2) {
                    cy.wrap(cleanedAddresses).should('include', cleanedUpAddress);
                } else {
                    cy.log(addresses);
                    cy.wrap(cleanedUpAddress).should('eq', addresses);
                }
            });
        }
    });
});