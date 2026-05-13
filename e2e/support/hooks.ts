beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

afterEach(() => {
  cy.screenshot();
});