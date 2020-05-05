const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = () => ({
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        // Apply rule for .scss or .css files
        test: /.(scss|sass)$/,
        exclude: /node_modules/,
        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
          // last we inject our style, in prod we are extracting it
          'style-loader',
          // This loader resolves url() and @imports inside CSS
          'css-loader',
          // First we transform SASS to standard CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, './public'),
    historyApiFallback: true,
  },
})
