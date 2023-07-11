export class StepLogger {
    commonLogger(stepType, description) {
        const message = `${stepType} - ${description}`;
        cy.allure().step(message);
        cy.log(`**${message}**`);
    }

    step(description) {
        this.commonLogger('Step', description);
    }

    verification(description) {
        this.commonLogger('Verification', description);
    }

    subStep(description) {
        this.commonLogger('Substep', description);
    }

    subVerification(description) {
        this.commonLogger('Subverification', description);
    }

    precondition(description) {
        this.commonLogger('Pre-Condition', description);
    }

    postcondition(description) {
        this.commonLogger('Post-Condition', description);
    }

    stepNumber(number) {
        cy.allure().step(`Step # ${number}`);
        cy.log(`**${number}**`);
    }
}