Feature: Nord Security Blog | going through submenu categories
  Scenario:  User can browse blog post categories and see articles that belong these categories
    Given I open Nord blog homepage
    When I click on random article on the page
    Then I see that main article category the same all related articles on a page
    
