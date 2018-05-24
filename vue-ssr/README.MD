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

既然能够打印出字符, 那么完全可以起个服务器, 来负责渲染输出字符.
```js
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
```

## 结构
按照官方的文档, 要做好`SSR`, 需要完成以下步奏
![img](https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png)
一个通用的`app.js`, 负责引用之前编写的所有文件, 比如路由, 组件, 状态, 资源等等.  
而后需要两个入口文件, 分别代表服务端, 和客户端. 通过`webpack`编译后, 生成对应的两个`bundle`文件.  
服务端引用对应的`Server`, 生成`HTML`字符串, 被浏览器所渲染. 同时, 浏览器引用`Client`文件, 将纯静态的页面激活, 添加绑定事件等.  

因此我们需要将项目结构调整下. 首先利用脚手架快速生成一个完善的`Vue`项目.
```Shell
vue init webpack ssr
```
而后调整下项目里的代码.  
```js
// main.js
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 导出工厂方法, 保证每次请求链接时 产生一个全新的实例
export function createApp () {
  const app = new Vue({
    render: h => h(App)
  })
  return { app }
}

// entry-server.js
import { createApp } from './main'

export default context => {
  const { app } = createApp()
  return app
}

// entry-client.js
import { createApp } from './main'

const { app } = createApp()
app.$mount('#app')

```

将对应的入口文件配置完之后, 还需要调整`webpack`配置, 分别处理服务端, 和客户端.
```js
  // webpack.server.conf.js
  const merge = require('webpack-merge')
  const nodeExternals = require('webpack-node-externals')
  const baseConfig = require('./webpack.base.conf.js')
  const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
  const path = require('path')

  module.exports = merge(baseConfig, {
    entry: path.resolve(__dirname, '../src/entry-server.js'),
    target: 'node',
    devtool: 'source-map',
    output: {
      libraryTarget: 'commonjs2'
    },
    externals: nodeExternals({
      whitelist: /\.css$/
    }),
    plugins: [
      // 生成对应的服务端
      new VueSSRServerPlugin()
    ]
  })
  // webpack.client.conf.js
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
      // 生成对应的 clickBundle
      new VueSSRClientPlugin()
    ]
  })
```
而后继续处理下我们的入口文件
```js
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
```

而后启动服务器, 从浏览器访问, 并有了静态文件, 同时也具有事件点击功能

## 路由与代码分割
`SPA`中, 路由负责整个项目里的所有页面, 自动根据`URL`来切换对应的组件. 而放到服务端中显示则略有不同.  
同 `vue`的实例, 每次请求的时候, `vue-router`, 也是同时使用一个全新的实例.  
整体思路为以下:
* 服务端: 根据请求的URL, 将`router`通过`push`方法, 跳转到对应的组件, 然后渲染生成页面
* 客户端: 在`router`确保完成之后, 再将`vue`实例挂载到DOM中, 用以激活整个页面.
```js
  // entry-server.js
  import { createApp } from './main'
  export default context => {
    return new Promise((resolve, reject) => {
      const { app, router } = createApp()
      // 将路由push到对应的url
      router.push({
        path: context.url
      })
      router.onReady(() => {
        // 查看当前URL是否有对应匹配的组件
        const matchedComponents = router.getMatchedComponents()
        if (matchedComponents.length === 0) {
          return reject({ code: 404 })
        }
        resolve(app)
      }, reject)
    })
  }

  // entry-client.js
  import { createApp } from './main'
  const { app, router } = createApp()
  router.onReady(() => {
    // 激活静态DOM
    app.$mount('#app')
  })

  // main.js
  import Vue from 'vue'
  import App from './App'
  import createRouter from './router.js'
  Vue.config.productionTip = false
  export function createApp () {
    const router = createRouter()
    const app = new Vue({
      router,
      render: h => h(App)
    })
    // 确保每次请求都是一个全新的实例
    return { app, router }
  }
```

## 数据预取和状态
如果项目中有采用`vuex`做数据管理, 那么会出现一个新的问题: 服务端渲染时, 可能已经在`store`中存入新的数据. 而客户端用户全部资源下载完成后, `store`中数据会与服务端的不一致, 这会导致渲染会出错等. 因此需要一种方式去将服务端的`store`更新到客户端

服务端和客户端的思路依然是不一样:
* 服务端: 组件中自定义方法, 获取数据, 在`router`准备完成时, 遍历所需要渲染的组件, 遍历执行组件中自定义的方法, 来更新`store`, 同时将更新后的`store`数据导出, 插入到模板中
* 客户端: 将模板中的数据取过来, 更新到自己的`store`中, 路由跳转前先执行自定义的方法, 来触发更新`store`, 更新完成后再执行`mount`

```js
// entry-server.js
 await Promise.all(matchedComponents.map(Component => {
  if (Component.asyncData) {
    return Component.asyncData({
      store,
      route: router.currentRoute
    })
  }
}))
// 将 state 注入到模板中
context.state = store.state

// entry-client.js
Vue.mixin({
  beforeMount () {
    const { asyncData } = this.$options
    if (asyncData) {
      // 如果有自定义方法, 则更新数据
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }
})
// 将模板上的数据取过来更新到store中
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// 组件中
{
  asyncData ({ store, route }) {
    // 更新数据. 这里是取不到this的.
    return store.state.items.length > 0
      ? Promise.resolve()
      : store.dispatch('fetchItem')
  }
}

```

## 总结
本文旨在理解并使用官方的服务端渲染, 了解服务端渲染是怎么一回事, 如何处理路由以及状态管理.
