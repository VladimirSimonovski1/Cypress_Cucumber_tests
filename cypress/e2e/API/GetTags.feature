Feature: Tags

  As a tester
  I want to test the Tags
  So that I can verify the quality of the application

  Scenario: Count all tags
    Given I have a "GET" request prepared
    When I "GET" all the tags
    Then I verify that currently there are 100 tags

  Scenario: Verify specific tag properties
    Given I have a "GET" request prepared
    When I "GET" a specific tag by slug
    Then I verify that the following properties are correct
    | key  | value                                              |
    | link | https://qamind.com/blog/tag/accessibility-testing/ |
    | name | Accessibility Testing                              |
    | slug | accessibility-testing                              |