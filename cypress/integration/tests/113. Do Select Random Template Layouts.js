function selectTemplateLayout() {
    this.selectTemplateLayoutElements.templateLayoutNamesList.then(($el) => {
        let templateLayoutNamesList = Cypress._.map($el, 'innerText')
        console.log(templateLayoutNamesList)

        // Exclude 'Two Columns 1' and 'Two Columns 2'
        templateLayoutNamesList = templateLayoutNamesList.filter(name => name !== 'Two Columns 1' && name !== 'Two Columns 2')

        let randomIndex = Math.floor(Math.random() * templateLayoutNamesList.length)
        let randomElement = templateLayoutNamesList[randomIndex]
        expect(templateLayoutNamesList).includes(randomElement)

        templateLayoutNamesList.forEach((opt, index) => {
            if (opt === randomElement) {
                this.selectTemplateLayoutElements.templateLayoutList
                    .eq(index).click({force: true})
                this.selectTemplateLayoutElements.selectedBtnSelectTemplateLayout
                    .click({force: true})
            }
        })
    })
}