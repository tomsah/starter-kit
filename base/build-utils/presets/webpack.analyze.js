// https://www.npmjs.com/package/webpack-bundle-analyzer
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = () => ({
  plugins: [new WebpackBundleAnalyzer()],
})
