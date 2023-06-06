export class Logindzmyr {
    navigate () {
    cy.visit("https://demoqa.com/login");
    }
    validateLogin() {
        cy.get('#login'). should("be.visible")
        cy.get('#login'). should("have.text", "Login");
    }
    validateUserName() {
        cy.get('#userName').should("be.visible");
        cy.get('#password').should("be.visible");
    }
    validateInvalide() {
        cy.get('#name').should("be.visible");
        cy.get('#name').should("have.text", "Invalid username or password!");
    }
}