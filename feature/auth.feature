Feature: Authentication
  As a user
  I want to authenticate
  So that I can use the app

  Scenario: User logs in successfully
    Given I am a user
    And have credentials
    When I click the login button
    And enter my username and password
    And click the submit button
    Then I am logged in

  Scenario: User fails to log in
    Given I am a user
    When I click the login button
    And enter random username and password
    And click the submit button
    Then I see a login error message

  Scenario: User logs out
    Given I am a user
    And have credentials
    And am logged in
    When I click the logout button
    Then I am logged out
