# vue-ssr

利用`Vue`进行单页面应用开发也有一年左右了, 弊端不断的出现, 比如无法做`SEO`, 首屏渲染白屏很久. 这些对用户的印象都会很差!
因此打算抽空学习下关于服务端渲染, 了解`Vue`的服务端渲染与客户端渲染的区别等..

## 开始
首先安装依赖
```shell
  npm install vue vue-server-renderer --save
```

一个简单的实例
```js
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
```
服务端与客户端最大的区别就是渲染后 出来的数据不一样.  
在客户端, 会生成一个`DOM`, 然后通过`$mount`插入到页面中.  
而在服务端, 只需要生成一串字符串, 浏览器接受后, 自然会将该字符转成`DOM`形式.
