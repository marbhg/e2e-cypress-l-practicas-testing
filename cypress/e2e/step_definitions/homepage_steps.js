import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

Given("the user visit homepage", () => {
  cy.visit("/");
  // Eliminar cookies.
  cy.clearCookies(); // <-- El cy.clearCookies() se cierra aquí
}); 

// Ingresar al apartado de contacto
When("the user enter the contact sections", () => {
  // Paso 1: Localiza el elemento 'Contacto'
  cy.contains('a', 'Contacto')
    .should('exist')
    .click({ force: true });
});

