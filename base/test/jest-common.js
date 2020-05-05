const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  // matching webpack config on how we are importing module
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    'shared',
    path.join(__dirname),
  ],
  // configure Jest to gracefully handle asset files such as stylesheets and images.
  moduleNameMapper: {
    //inject the file name as a class name for css module
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|sass|scss)$': require.resolve('./style-mock.js'),
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve(
      './file-mock.js',
    ),
  },
  // adding plugin to the watch mode
  //  watch-select-project :allow you to choose between your different config on
  //  watch mode  e.g: run only client or server
  //
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
