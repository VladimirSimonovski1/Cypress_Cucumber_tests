Feature: QAMIND

  Scenario: Search article by keyword
    Given I visit qamind.com
    When I search for "flowchart"
    Then I see the "Flowchart in Software Testing: A Comprehensive Guide with Examples" article

  Scenario: Open article by clicking on the title
    Given I visit qamind.com
    Then I open article: "How IoC in test automation can simplify your test framework?"