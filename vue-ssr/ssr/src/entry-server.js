import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()
    // 将路由push到对应的url
    router.push({
      path: context.url
    })
    router.onReady(async () => {
      // 查看当前URL是否有对应匹配的组件
      const matchedComponents = router.getMatchedComponents()
      if (matchedComponents.length === 0) {
        return reject({ code: 404 })
      }
      try {
        await Promise.all(matchedComponents.map(Component => {
          if (Component.asyncData) {
            return Component.asyncData({
              store,
              route: router.currentRoute
            })
          }
        }))
  
        context.state = store.state
      } catch (e) {
        reject(e)
      }
      resolve(app)
    }, reject)
  })
}
