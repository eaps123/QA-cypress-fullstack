import environment from '../../config/env';
import { users } from '../../config/data/users';

export class LoginPage {

  private readonly usernameInput = '#user-name';
  private readonly passwordInput = '#password';
  private readonly loginBtn = '#login-button';
  private readonly errorMessage = '[data-test="error"]';

  navigate() {
    cy.visit(environment.web.saucedemo);
  }

  login(username: string, password: string) {

    if (username) {
      cy.get(this.usernameInput).type(username);
    }

    if (password) {
      cy.get(this.passwordInput).type(password);
    }

    cy.get(this.loginBtn).click();
  }

  loginAsStandardUser() {

    this.login(
      users.standard.username,
      users.standard.password
    );
  }

  loginWithInvalidPassword() {

    this.login(
      users.standard.username,
      users.invalid.password
    );
  }

  getError() {
    return cy.get(this.errorMessage);
  }
}