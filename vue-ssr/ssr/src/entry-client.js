import Vue from 'vue'
import { createApp } from './main'

const { app, router, store } = createApp()
window.app = app
window.router = router

Vue.mixin({
  beforeMount () {
    const { asyncData } = this.$options
    if (asyncData) {
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }
})

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  // 激活静态DOM
  app.$mount('#app')
})
