module.exports = {
  ...require('./jest-common'),
  testEnvironment: 'jest-environment-jsdom', // this is to simulate the DOM
  // on a node environment for our client
  // add a label to the client side test to improve test report readability
  displayName: 'client',
  //files that jest will run after it sets up the jest testing env
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'jest-axe/extend-expect',
  ],
  // necessary if you use your css in js (emotion, css-js, glamorous ...)
  // to see the css added in your snapshot
  // snapshotSerializers: ['jest-emotion'],
  coverageThreshold: {
    // this represent the acceptable minimum of code tested
    // as the project grow, those number should be updated to
    // reflect hoe much code is tested, very good for not degrading the
    // actual coverage
    global: {
      statements: 40,
      branches: 30,
      functions: 40,
      lines: 40,
    },
    //reinforce coverage on particular files
    //jest remove the file from the global coverage
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
}
