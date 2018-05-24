import { createApp } from './main'

const { app, router } = createApp()
window.app = app
window.router = router
router.onReady(() => {
  // 激活静态DOM
  app.$mount('#app')
})
