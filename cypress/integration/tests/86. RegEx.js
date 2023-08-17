{
    const patternsToRemove = [
        /\s+/g,
        /\d+-\s+/g,   // Removes patterns like "1-", "12-", "123-"

        /\d+-\s*/g,   // Removes patterns like "1-", "12-", "123-"
        /#\d+\s*/g,   // Removes patterns like "#2", "#12", "#123"
        /Apt\s\d+\s*/g,   // Removes patterns like "Apt 2", "Apt 12", "Apt 123"

        /Apt\s\d+/g,   // Removes patterns like "Apt 123"
        /,/g,
    ];

    const cleanedUpAddress = address.replace(/,\s*/g, '').trim();
    const cleanedUp = address.replace(/(\d+-\s*|#\d+\s*|Apt\s\d+\s*)/g, '').trim();
    // Without whitespace replace (/,/g, "")

}