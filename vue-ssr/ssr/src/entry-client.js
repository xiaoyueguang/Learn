import { createApp } from './main'

const { app, router } = createApp()

router.onReady(() => {
  console.log('完成')
  app.$mount('#app')
})
