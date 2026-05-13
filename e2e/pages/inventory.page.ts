export class InventoryPage {

  private addToCartBtn =
    '.inventory_item button';

  private cartIcon =
    '.shopping_cart_link';

  private cartBadge =
    '.shopping_cart_badge';

  private menuBtn =
    '#react-burger-menu-btn';

  private logoutBtn =
    '#logout_sidebar_link';

  addProduct() {

    cy.get(this.addToCartBtn)
      .first()
      .click();
  }

  addProductById(productId: string) {
    cy.get(`[data-test="add-to-cart-${productId}"]`).click();
  }

  addMultipleProducts() {
    this.addProductById('sauce-labs-backpack');
    this.addProductById('sauce-labs-bike-light');
  }

  goToCart() {
    cy.get(this.cartIcon)
      .click();
  }

  openMenu() {
    cy.get(this.menuBtn)
      .click();
  }

  logout() {
    cy.get(this.logoutBtn)
      .click();
  }

  getCartBadge() {
    return cy.get(this.cartBadge);
  }
}