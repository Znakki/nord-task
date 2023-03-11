# nord-task
Nord Task

# Run tests
npm run cy-cli

Task 1. API.

Using JavaScript or TypeScript, Node.js and test runner/assertion library of your choice, write REST API tests for the following endpoint:
https://gorest.co.in/public/v2/users
Information about the endpoint and authorization are provided on https://gorest.co.in/
Auth token can be obtained after signing in with GitHub, Google or Microsoft account. If you're not comfortable using your personal accounts, feel free to create a temporary one for the occasion.
Using the information provided on the website, as well as your knowledge of REST best practices, cover the endpoint the best you can to assess correct functionality.

Task 2. UI.
Using Cypress (Chrome browser) and Cucumber plugin (https://github.com/badeball/cypress-cucumber-preprocessor) write the following user scenarios for the website: https://nordlayer.com/blog/
- User should be able to perform search for existing articles and receive relevant results (by article title)
- User should be able to perform search for existing articles and receive relevant results (by article content)
- User can browse blog post categories and see articles that belong these categories
- On individual blog post page, user can see related articles, which belong to the same category as the opened blog post
  Create appropriate GIVEN, WHEN, THEN steps as you see fit to implement these scenarios.
  Make run scripts in package.json to execute the suite in both headless and headed modes.
