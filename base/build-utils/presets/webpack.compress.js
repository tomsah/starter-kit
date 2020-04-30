// https://webpack.js.org/plugins/compression-webpack-plugin/
const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = () => ({
  plugins: [new CompressionWebpackPlugin()],
})
