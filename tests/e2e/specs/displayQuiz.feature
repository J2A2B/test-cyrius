Feature: Display a quiz to an user
  The feature consist to display a quiz for the user.
  The objective is an user can click on the button to display a quiz.
  Click on the button display a quiz window with text and clicking
  on the cross inside the block hide the text block.

  Scenario: I press the button once
    Given I visit the home page
    When I click on the button
    Then The question block should be displayed

  Scenario: I press the button 2 times
    Given I visit the home page
    When I click on the button 2 times
    Then The quiz window should be closed