Feature: Nord Security Blog | Searching by article title 
  Scenario:  User should be able to perform search for existing articles and receive relevant results (by article content)
    Given I open Nord blog homepage
    When I should see a search bar
    And I type "Belarus" in the search bar
    Then I should see 2 in the search bar
    And I see that all found articles contains a searchable "Belarus" word
