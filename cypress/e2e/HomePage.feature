Feature: QAMIND

  Scenario: Search article by keyword
    Given I visit qamind.com
    When I search for "flowchart"
    Then I see the "Flowchart in Software Testing: A Comprehensive Guide with Examples" article