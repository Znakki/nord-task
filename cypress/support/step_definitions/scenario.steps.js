import { When, Given } from '@badeball/cypress-cucumber-preprocessor';

import { blog_components } from '../../page_objects/blogComponent.js';
import { getRandomInt } from '../../utils/utils.js';

const results = blog_components.searchResult;
const menuItem = 'submenu-item-';
const getMenuCategorySelector = (pos) => `${menuItem}${pos}`;

const getMenuCategorySelectorXpath = (subMenuName) =>
  `//span[normalize-space()='${subMenuName}']/ancestor::div[contains(@data-testid,'submenu-item')]/a`;

const clickOnRandomArticle = () => {
  cy.get('div.nord-container')
    .find(blog_components.blockItem)
    .then(($value) => {
      return $value.length;
    })
    .then((length) => {
      cy.get(blog_components.blockItem).eq(getRandomInt(length)).click();
    });
};

const SUBMENU_ITEMS = {
  ALL_CATEGORIES: getMenuCategorySelector(0),
  IN_DEPTH: getMenuCategorySelector(1),
  CLOUD_SECURITY: getMenuCategorySelector(2),
  PRODUCT_UPDATES: getMenuCategorySelector(3),
  CASE_STUDIES: getMenuCategorySelector(4),
  PARTNER_PROGRAM: getMenuCategorySelector(5),
  NEWS: getMenuCategorySelector(6),
  REMOTE_WORK: getMenuCategorySelector(7),
  SASE: getMenuCategorySelector(8),
  ZERO_TRUST: getMenuCategorySelector(9),
};

Given('I open Nord blog homepage', () => {
  const path = '/blog/';
  cy.intercept({
    method: 'GET',
    url: '/svg/search.svg',
  }).as('searchInput');
  cy.visit(path);
  cy.url().should('include', path);
});

When('I should see a search bar', () => {
  cy.wait('@searchInput').its('response.statusCode').should('eq', 200);
  cy.get(blog_components.searchBar).should('be.visible');
});

When('I type {string} in the search bar', (search) => {
  cy.get(blog_components.searchBarInput)
    .should('have.attr', 'placeholder', 'Search the blog...')
    .click()
    .type(`${search}{enter}`);
});

When('I should see {int} in the search bar', (expectedCount) => {
  cy.get(results).should('have.length', expectedCount);
});

When('I see that all search results have a searchable keyword {string} in title', (expectedText) => {
  cy.get(results)
    .find('h3[data-testid="text"]')
    .each((element) => {
      const text = element.text();
      expect(text.toLowerCase()).to.contain(expectedText.toLowerCase());
    });
});

When('I see that all found articles contains a searchable {string} word', (expectedText) => {
  // It could be better :)
  cy.get(results).each((element) => {
    cy.visit(element.attr('href'));
    cy.contains(expectedText).should('be.visible');
  });
});

When('I hit {string} sub menu item', (subMenuName) => {
  cy.xpath(getMenuCategorySelectorXpath(subMenuName)).should('have.text', subMenuName).click();
});

When('I see that all articles in chosen sub menu item has a proper {string} category', (subMenuName) => {
  cy.get(blog_components.blockItem)
    .find(blog_components.postCategory)
    .each((element) => {
      const text = element.text();
      expect(text.toLowerCase()).to.contain(subMenuName.toLowerCase());
    });
});

When('I click on random article on the page', () => {
  clickOnRandomArticle();
});

When('I see that main article category the same all related articles on a page', () => {
  cy.get(blog_components.articleCategoryMain).then((element) => {
    const mainArticleCategory = element.text();
    cy.wrap(mainArticleCategory).as('mainArticleCategory');
  });

  cy.get(blog_components.relatedArticlesBlock).scrollIntoView();
  cy.get(`${blog_components.relatedArticlesBlock} ${blog_components.blockItem}`)
    .find(blog_components.postCategory)
    .each((element) => {
      const relatedArticleCategory = element.text();
      cy.get('@mainArticleCategory').then((text) => {
        expect(relatedArticleCategory.toLowerCase()).to.contain(text.toLowerCase());
      });
    });
});
