Feature: Posts

  As a tester
  I want to test the Posts
  So that I can verify the quality of the application

  Background: Getting a post content
    Given I have a "GET" request prepared
    When I "GET" a specific post by "develop-an-effective-software-test-strategy" slug

  Scenario: Verify that the content of the post is not empty
    Then I verify that the content is not empty

  Scenario: Verify tag ids for a specific post
    Then I verify that the following tag ids are present for the post id: 4602

  Scenario: Verify post content
    Then I verify the post content
    | property | value                                                            |
    | id       | 4602                                                             |
    | guid     | https://qamind.com/?p=4602                                       |
    | status   | publish                                                          |
    | title    | How to Strategically Develop an Effective Software Test Strategy |
    | author   | 1                                                                |
    | format   | standard                                                         |
