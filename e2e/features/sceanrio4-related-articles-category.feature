Feature: Nord Security Blog | Main Article view + related articles should have the same categories
  Scenario:  On individual blog post page, user can see related articles, which belong to the same category as the opened blog post
    Given I open Nord blog homepage
    When I click on random article on the page
    Then I see that main article category the same all related articles on a page
    
