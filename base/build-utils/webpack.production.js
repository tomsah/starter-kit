const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash:4].js',
    chunkFilename: '[name].[chunkhash:4].js',
  },
  module: {
    rules: [
      {
        test: /.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  // Records are used for storing module IDs across separate builds
  // every time webpack builds, it picks up records.json and rewrites
  // the file if it has changed
  // useful for code-splitting chunk caching
  // TODO: need to check that better
  recordsPath: path.join(__dirname, 'records.json'),

  //Webpack allows you to define a performance budget.
  //it gives your build size constraint which it has to follow
  //the calculation includes extracted chunks to entry calculation
  //here using warning to not fail build and way too big number
  //TODO : custom based on project
  performance: {
    hints: 'warning', // "error" or false are valid too
    maxEntrypointSize: 500000, // in bytes, default 250k
    maxAssetSize: 4500000, // in bytes
  },
  // for good css file caching we are using contenthash
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:4].css',
      chunkFilename: '[name].[contenthash:4].css',
    }),
  ],
})
