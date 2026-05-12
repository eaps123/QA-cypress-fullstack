import {
  Given,
  When,
  Then
} from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/login.page";
import { users } from "../../config/data/users";

const loginPage = new LoginPage();

Given('que estou na página de login', () => {

    loginPage.navigate();
  }
);

When('realizo login com usuário {string}', (userType: string) => {

    const user =
      users[userType as keyof typeof users];

    loginPage.login(
      user.username,
      user.password
    );
  }
);

When('realizo login com usuário {string} e senha {string}',
  (
    username: string,
    password: string
  ) => {

    loginPage.login(
      username,
      password
    );
  }
);

Then('devo ver a página de produtos', () => {

    cy.url()
      .should('include', '/inventory');
  }
);

Then('devo ver a mensagem {string}', (message: string) => {

    loginPage
      .getError()
      .should('be.visible')
      .and('contain.text', message);
  }
);

Given('que estou logado na aplicação', () => {

    loginPage.navigate();

    loginPage.login(
      users.standard.username,
      users.standard.password
    );

    cy.url()
      .should('include', '/inventory');
  }
);

Given('que não estou logado', () => {

    loginPage.navigate();
  }
);

Then('devo ser redirecionado para login', () => {

    cy.get('[data-test="login-button"]')
      .should('be.visible');
  }
);