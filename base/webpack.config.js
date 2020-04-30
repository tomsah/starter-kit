const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const presetConfig = require('./build-utils/loadPresets')
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => {
  return webpackMerge(
    {
      entry: './src/index.js',
      mode,
      optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'all',
        },
      },
      resolve: {
        modules: ['node_modules', path.join(__dirname, 'src'), 'shared'],
      },
      module: {
        rules: [
          {
            test: /\.(png|jp?g|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                // only if the img is =< 5000 bytes is ok to inline it as a
                // base 64 url else add the file to our dist directory and
                // return the hashed url
                options: {
                  limit: 5000,
                },
              },
            ],
          },
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
      output: {
        filename: 'bundle.js',
        chunkFilename: '[name].lazy-chunk.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new webpack.ProgressPlugin(),
      ],
    },
    modeConfig(mode),
    presetConfig({mode, presets}),
  )
}
