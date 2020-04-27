const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   exclude: /\.module\.css$/,
      //   use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
      // },
      {
        test: /.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAll: true,
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      // {
      //   // dealing with js css module ()
      //   test: /\.module\.css$/,
      //   use: [
      //     {loader: 'style-loader'},
      //     {
      //       loader: 'css-loader',
      //       options: {modules: true, localsConvention: 'camelCaseOnly'},
      //     },
      //   ],
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader',
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
}
