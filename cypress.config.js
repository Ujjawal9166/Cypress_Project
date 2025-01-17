const { defineConfig } = require("cypress");

//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
// const {
//   preprocessor,
// } = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  addCucumberPreprocessorPlugin(on, config);

  //on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,

  env: {
    url: "https://rahulshettyacademy.com",
  },

  retries: {
    runMode: 1,
  },

  projectId: "w5pcxe",

  e2e: {
    setupNodeEvents,

    specPattern: "cypress/integration/examples/*.js",
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
