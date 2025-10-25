import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given("the user visit homepage", () => {
    cy.visit("/");

   //Eliminar cookies.
    cy.clearCookies(); 

  });

 