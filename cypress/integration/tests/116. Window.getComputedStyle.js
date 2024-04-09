function verifyCustomizedPreOrderSummary(backgroundColor, color, borderWidth, borderStyle, borderColor, borderCurve) {
    // Retrieve computed styles of the pre-order summary
    this.sofOrderForm.sofPreOrderSummary.then(($el) => {
        const styles = window.getComputedStyle($el[0], '::after');

        // Assertions based on computed styles
        expect(styles.backgroundColor).to.equal(backgroundColor);
        expect(styles.color).to.equal(color);
        expect(styles.borderStyle).to.equal(borderStyle);
        expect(styles.borderColor).to.equal(borderColor);
        expect(styles.borderRadius).to.equal(borderCurve);

        // Assertion for border width
        const borderWidthComputed = parseInt(styles.borderWidth.replace('px', ''));
        expect(borderWidthComputed).to.equal(borderWidth);
    });
}