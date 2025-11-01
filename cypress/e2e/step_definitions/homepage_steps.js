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

When ("The user must fill in the name field {string}", (name)=>{
  cy.get('input[placeholder="Ingresa tu Nombre"]').clear().type(name);
});

When ("the user must fill in the email {string}", (email)=>{
  cy.get('input[placeholder="info@qarmy.com"]').clear().type(email);
});

