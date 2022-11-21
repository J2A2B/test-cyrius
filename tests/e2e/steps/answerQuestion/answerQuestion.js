// eslint-disable-next-line no-unused-vars
const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

before(function () {
  cy.visit("/");
});

Given("Open the quiz", function () {
  cy.get("button#press-to-display").click();
});
When("I answer to all the question good", function () {
  cy.get("button#select-true-answer").click();
  cy.get("button#select-false-answer").click();
  cy.get("button#select-false-answer").click();
});
When("I answer at least one question wrong", function () {
  cy.get("button#select-false-answer").click();
  cy.get("button#select-false-answer").click();
  cy.get("button#select-false-answer").click();
});

Then("The success message should be displayed", function () {
  cy.get("p#success-message").contains("Bravo tout juste !");
  cy.get("button#press-to-display").click();
});
Then("The error message should be displayed", function () {
  cy.get("p#error-message").contains("Raté ! Tu as fait des erreurs");
});
