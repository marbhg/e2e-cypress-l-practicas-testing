const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("the user visit homepage", () => {
  cy.visit("/");
  // Eliminar cookies.
  cy.clearCookies();
});

// Ingresar al apartado de contacto
When("the user enter the contact sections", () => {
  // Paso 1: Localiza el elemento 'Contacto'
  cy.contains('a', 'Contacto')
    .should('exist')
    .click({ force: true });
});

When("the user must fill in the name field {string}", (name) => {
  cy.get('input[placeholder="Ingresa tu Nombre"]').clear().type(name);
});

When("the user must fill in the email {string}", (email) => {
  cy.get('input[placeholder="info@qarmy.com"]').clear().type(email);
});

When("the user must enter the subject {string}", (subject) => {
  cy.get('input[placeholder="Ingresá tu asunto"]').clear().type(subject);
});

When("the user enters the following message {string}", (message) => {
  cy.get('textarea[placeholder="Escribí tu mensaje"]:visible').clear().type(message);
});

Then("The user submits the form", () => {
  cy.get('button[type="submit"]').click();
});






