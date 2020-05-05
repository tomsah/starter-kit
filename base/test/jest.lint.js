const path = require('path')

// we are adding this config in jest.config in the projects arr
// that way we will run our linting against all our files every time we run
// our test

module.exports = {
  // setting our root directory
  rootDir: path.join(__dirname, '..'),
  // adding a label for those eslint test
  displayName: 'lint',
  // precising our runner (there is many so use what is needed for your project)
  runner: 'jest-runner-eslint',
  //precise in which directory are the files to be tested
  //in that instance all our JS file which are in our root dir
  //see package.json jest-runner-eslint for teh config to remove file that
  // does not need to be tested
  testMatch: ['<rootDir>/**/*.js'],
}
