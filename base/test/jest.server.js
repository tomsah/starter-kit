const path = require('path')

module.exports = {
  // we need all the common config (config shared between client and server)
  ...require('./jest-common'),
  // add a label to the server side test to improve test report readability
  displayName: 'server',
  // we want to put our test coverage for the server in its own folder
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  // on the server we run jest in a node environment
  testEnvironment: 'jest-environment-node',
  // our tests for SSR is are in the server test folder
  testMatch: ['**/__server_tests__/**/*.js'],
}
