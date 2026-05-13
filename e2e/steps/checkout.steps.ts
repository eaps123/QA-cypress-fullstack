import {
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";
import environment from "../../config/env";
import { CheckoutFactory }
    from "../factories/checkout.factory";
import { InventoryPage }
    from "../pages/inventory.page";
import { CartPage }
    from "../pages/cart.page";
import { CheckoutPage }
    from "../pages/checkout.page";

const inventoryPage =
    new InventoryPage();

const cartPage =
    new CartPage();

const checkoutPage =
    new CheckoutPage();

When(
    'adiciono um produto ao carrinho',
    () => {

        inventoryPage.addProduct();
    }
);

When(
    'adiciono múltiplos produtos ao carrinho',
    () => {

        inventoryPage.addMultipleProducts();
    }
);

When(
    'vou para o carrinho',
    () => {

        inventoryPage.goToCart();
    }
);

When(
    'acesso o carrinho sem produtos',
    () => {

        inventoryPage.goToCart();
    }
);

// CHECKOUT

When('finalizo a compra com dados válidos', () => {

        const checkoutData =
            CheckoutFactory.validCheckout();
        cartPage.startCheckout();
        checkoutPage.startCheckoutFlow(
            checkoutData
        );
        checkoutPage.finish();
    }
);

When('finalizo a compra sem preencher dados obrigatórios', () => {
        const checkoutData =
            CheckoutFactory.invalidCheckout();
        cartPage.startCheckout();
        checkoutPage.startCheckoutFlow(
            checkoutData
        );
    }
);

When('tento finalizar a compra', () => {
        cartPage.startCheckout();
        checkoutPage.continue();
    }
);

When('tento acessar a página de checkout', () => {
        cy.visit(
            `${environment.web.saucedemo}/checkout-step-one.html`
        );
    }
);

// ASSERTS

Then('devo ver a confirmação de compra', () => {
        checkoutPage
            .getSuccessMessage()
            .should('be.visible');
    }
);

Then('devo ver uma mensagem de erro no checkout', () => {
        checkoutPage
            .getErrorMessage()
            .should('be.visible');
    }
);

Then('devo ver uma mensagem de carrinho vazio', () => {
        checkoutPage
            .getErrorMessage()
            .should('be.visible');
    }
);

Then('o carrinho deve refletir {string} produtos', (quantity: string) => {

        inventoryPage
            .getCartBadge()
            .should('have.text', quantity);
    }
);