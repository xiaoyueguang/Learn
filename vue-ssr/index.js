const Vue = require('vue')
// 创建一个实例, 这里跟浏览器端的行为是一致的.
const app = new Vue({
  template: `<div>Hello World</div>`
})

// 创建一个renderer, 专门负责将传入的vue实例转换为字符串
const renderer = require('vue-server-renderer').createRenderer()
// 将实例转换为一个html字符串
renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
  // <div data-server-rendered="true">Hello World</div>
})
