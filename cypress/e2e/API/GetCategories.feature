Feature: QAMIND API

  As a tester
  I want to test the QAMIND API
  So that I can verify the quality of the application

  @categories
  Scenario: Get all categories
    Given I have a "GET" request prepared
    When I send the "GET" request
    Then I see all the "categories"
    And I verify all the category names
    | Categories    |
    | Comparisons   |
    | Experiences   |
    | How to's      |
    | Reviews       |
    | Tutorials     |
    | Uncategorized |
