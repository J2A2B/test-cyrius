Feature: Answer to the quiz by the user
  The feature consist for the user to respond to the quiz.
  The objective is an user can click to a button
  true or false for each question.
  Click on true or false button go to the next question.
  Answer good to all question display a success message
  and answer wrong display an error message

  Scenario: I answer the quiz good
    Given Open the quiz
    When I answer to all the question good
    Then The success message should be displayed

  Scenario: I answer the quiz wrong
    Given Open the quiz
    When I answer at least one question wrong
    Then The error message should be displayed