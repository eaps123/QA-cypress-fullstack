/* Responsável por:
- carrinho
- badge
- itens
- iniciar checkout */
export class CartPage {

  private checkoutButton =
    '#checkout';

  private cartItem =
    '.cart_item';

  private cartBadge =
    '.shopping_cart_badge';

  private emptyCartMessage =
    '[data-test="error"]';

  startCheckout() {
    cy.get(this.checkoutButton)
      .click();
  }

  getCartItemsCount() {
    return cy.get(this.cartItem);
  }

  getCartBadge() {
    return cy.get(this.cartBadge);
  }

  getEmptyCartMessage() {
    return cy.get(this.emptyCartMessage);
  }
}