/* Responsável por:
- formulário checkout
- continuar fluxo
- finalizar
- mensagens */

type CheckoutData = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export class CheckoutPage {

  private firstName =
    '#first-name';

  private lastName =
    '#last-name';

  private postalCode =
    '#postal-code';

  private continueBtn =
    '#continue';

  private finishBtn =
    '#finish';

  private successMsg =
    '.complete-header';

  private errorMsg =
    '[data-test="error"]';

  fillForm(checkoutData: CheckoutData) {

    if (checkoutData.firstName) {
      cy.get(this.firstName)
        .type(checkoutData.firstName);
    }

    if (checkoutData.lastName) {
      cy.get(this.lastName)
        .type(checkoutData.lastName);
    }

    if (checkoutData.postalCode) {
      cy.get(this.postalCode)
        .type(checkoutData.postalCode);
    }
  }

  continue() {
    cy.get(this.continueBtn)
      .click();
  }

  finish() {
    cy.get(this.finishBtn)
      .click();
  }

  startCheckoutFlow(
    checkoutData: CheckoutData
  ) {
    this.fillForm(checkoutData);
    this.continue();
  }

  getSuccessMessage() {
    return cy.get(this.successMsg);
  }

  getErrorMessage() {
    return cy.get(this.errorMsg);
  }
}