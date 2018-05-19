const Vue = require('vue')
const express = require('express')
const server = express()
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('./index.template.html', 'utf-8')
const serverBundle = require(path.resolve(__dirname, './ssr/dist/vue-ssr-server-bundle.json'))
const clientManifest = require(path.resolve(__dirname, './ssr/dist/vue-ssr-client-manifest.json'))
// 处理服务端和客户端.
const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest
})
// 静态文件托管
server.use(express.static(path.resolve(__dirname, './ssr/dist')))
server.get('/', (req, res) => {
  renderer.renderToString({}, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})
server.listen(8080)
