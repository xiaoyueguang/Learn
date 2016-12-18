var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC_PATH = path.resolve(__dirname, './src')
const BUILD_PATH = path.resolve(__dirname, './build')

module.exports = {
  entry: {
    index: path.resolve(SRC_PATH, 'index.ts')
  },
  output: {
    path: BUILD_PATH,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Learn TypeScript',
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      chunks: 'index',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  devtool: 'source-map'
}