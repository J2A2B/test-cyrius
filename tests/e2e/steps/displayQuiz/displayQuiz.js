// eslint-disable-next-line no-unused-vars
const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

function clickButton() {
  cy.get("button#press-to-display").click();
}

Given("I visit the home page", function () {
  cy.visit("/");
});

When("I click on the button", function () {
  clickButton();
});

When("I click on the button 2 times", function () {
  clickButton();
  clickButton();
});

Then("The question block should be displayed", function () {
  cy.get("h1#user-text").contains("Mon super Quiz");
});

Then("The quiz window should be closed", function () {
  cy.get("h1#user-text").should("not.exist");
});
