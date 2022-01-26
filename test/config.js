// conf.js
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;
exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["**/*.spec.js"],
  capabilities: {
    "browserName": "chrome",
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 600000,
  },
  onPrepare() {
    jasmine.getEnv().addReporter(
        new SpecReporter({
          spec: {
            displayStacktrace: true,
          },
          summary: {
            displayDuration: false,
          },
        }),
    );
  },
};
