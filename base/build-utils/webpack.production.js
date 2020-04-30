const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  devtool: 'source-map',
  output: {
    filename: '[chunkhash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(scss|css)$/,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[hash].[name].css',
      chunkFilename: '[hash].[id].css',
    }),
  ],
})
