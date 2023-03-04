// Open Index(lower 10) or e2e.js --->

const origLog = Cypress.log;
Cypress.log = function (opts, ...other) {
    if (opts.displayName === "script" || opts.name === "request") {
        return;
    }
    return origLog(opts, ...other);
};

Cypress.Server.defaults({
    ignore: (xhr) => {
        return true;
    },
});