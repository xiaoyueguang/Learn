const Vue = require('vue')
const express = require('express')
const server = express()
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync('./index.template.html', 'utf-8')
const serverBundle = require(path.resolve(__dirname, './dist/vue-ssr-server-bundle.json'))
const clientManifest = require(path.resolve(__dirname, './dist/vue-ssr-client-manifest.json'))
// 处理服务端和客户端.
const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest
})
// 静态文件托管
server.use(express.static(path.resolve(__dirname, './dist')))
server.get('*', (req, res) => {
  const context = {
    url: req.url,
    title: 'TEST TITLE'
  }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err)
      if (err.code === 404) {
        res.status(404).end('Page not found!')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
})
server.listen(8080)
