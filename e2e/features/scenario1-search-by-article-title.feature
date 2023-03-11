Feature: Nord Security Blog | Searching by article title 
  Scenario: User should be able to perform search for existing articles and receive relevant results (by article title)
    Given I open Nord blog homepage
    When I should see a search bar
    And I type "linux app" in the search bar
    Then I should see 1 in the search bar
    And I see that all search results have a searchable keyword "linux app" in title
