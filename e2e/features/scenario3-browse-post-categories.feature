Feature: Nord Security Blog | going through submenu categories
  Scenario Outline:  User can browse blog post categories and see articles that belong these categories
    Given I open Nord blog homepage
    When I hit "<subMenuName>" sub menu item
    Then I see that all articles in chosen sub menu item has a proper "<subMenuName>" category
    Examples:
    |subMenuName    | 
    |In Depth       |
    |Cloud Security |
    |Product Updates |
    |Case Studies |
    |Partner Program |
    |News |
    |SASE |
    |Zero Trust |
    
    
