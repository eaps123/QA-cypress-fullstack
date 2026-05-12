import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import {
  addCucumberPreprocessorPlugin,
} from "@badeball/cypress-cucumber-preprocessor";
import {
  createEsbuildPlugin,
} from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({

  video: true,

  chromeWebSecurity: false,

  viewportWidth: 1440,
  viewportHeight: 900,

  retries: 1,

  screenshotsFolder: "reports/screenshots",

  videosFolder: "reports/videos",

  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "reports/mochawesome",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {

    baseUrl: "https://www.saucedemo.com",

    specPattern: "./e2e/features/**/*.feature",

    supportFile: "cypress/support/e2e.ts",

    async setupNodeEvents(on, config) {

      await addCucumberPreprocessorPlugin(
        on,
        config
      );
    
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
    
      require(
        "cypress-mochawesome-reporter/plugin"
      )(on);
    
      config.env.typescript =
        require.resolve("typescript");
    
      return config;
    },
  },
});