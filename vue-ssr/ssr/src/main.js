// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
