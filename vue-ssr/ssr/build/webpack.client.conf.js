const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const path = require('path')

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '../src/entry-client.js'),
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    new VueSSRClientPlugin()
  ]
})