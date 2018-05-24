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
