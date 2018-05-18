const Vue = require('vue')
const server = require('express')()
const createRenderer = require('vue-server-renderer').createRenderer

const renderer = createRenderer({
  // 读取模板
  template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

server.get('*', (req, res) => {
  const app = new Vue({
    data () {
      return {
        url: req.hostname
      }
    },
    template: `
      <div>
        <span>Hello SSR FROM <em>{{url}}</em>!</span>
        <p><span v-for="i in 9" :key="i">{{i}}</span></p>
      </div>
    `
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    // 生成 html 后, 在这里结束响应并返回
    res.end(html)
  })
})

server.listen(8080)
