import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    router.push({
      path: context.url
    })
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      console.log(matchedComponents)
      if (matchedComponents.length === 0) {
        return reject({ code: 404 })
      }
      console.log(app)
      resolve(app)
    }, reject)
  })
}
