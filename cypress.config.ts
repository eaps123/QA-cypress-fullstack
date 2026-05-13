import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import {
  addCucumberPreprocessorPlugin,
} from "@badeball/cypress-cucumber-preprocessor";

const {
  createEsbuildPlugin,
} = require(
  "@badeball/cypress-cucumber-preprocessor/esbuild"
);

export default defineConfig({

  viewportWidth: 1440,
  viewportHeight: 900,

  video: true,

  screenshotOnRunFailure: true,

  screenshotsFolder:
    "reports/screenshots",

  videosFolder:
    "reports/videos",

  downloadsFolder:
    "cypress/downloads",

  fixturesFolder:
    "cypress/fixtures",

  reporter:
    "cypress-mochawesome-reporter",

  reporterOptions: {

    reportDir:
      "reports/mochawesome",

    overwrite: false,

    html: true,

    json: true,

    embeddedScreenshots: true,

    inlineAssets: true
  },

  env: {

    ENV: "qa"
  },

  e2e: {

    baseUrl:
      "https://www.saucedemo.com",

    specPattern: [
      "e2e/features/**/*.feature",
      "api/tests/**/*.cy.ts"
    ],

    supportFile:
      "cypress/support/e2e.ts",

    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ) {

      await addCucumberPreprocessorPlugin(
        on,
        config
      );

      on(
        "file:preprocessor",

        createBundler({
          plugins: [
            createEsbuildPlugin(config)
          ],
        })
      );

      require(
        "cypress-mochawesome-reporter/plugin"
      )(on);

      return config;
    },
  },
});