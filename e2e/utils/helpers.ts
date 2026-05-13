import fs from 'fs';

export function waitForInventoryPage() {
  cy.url()
    .should('include', '/inventory');
}

export function takeScreenshot(
  fileName: string
) {
  cy.screenshot(fileName);
}

export function ensureReportsFolders() {
  fs.mkdirSync(
    'reports/screenshots',
    { recursive: true }
  );

  fs.mkdirSync(
    'reports/videos',
    { recursive: true }
  );
}