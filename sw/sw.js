this.addEventListener('install', function (event) {
  console.log('安装完成')
  event.waitUntil(
    caches.open('v1').then(function (cache) {
      return cache.addAll([
        // '/index.html'
      ])
    })
  )
})

this.addEventListener('activate', function (event) {
  // console.log('activate', event)
  console.log('激活完成')
})

// FetchEvent 请求头事件. 挟持浏览器请求事件
this.addEventListener('fetch', function (event) {
  const REQUEST = event.request.clone()
  REQUEST.url = event.request.url.replace(/[&?]v=[\d]*/, '')

  event.respondWith(
    // response 响应头, 包含状态码 链接 类型 数据等
    // match 从cache中, 抓取数据. 如果抓到了, 则返回响应数据
    caches.match(REQUEST).then(function (response) {
    // 抓取到则返回数据
      if (response !== undefined) {
        return response
      } else {
        console.log(REQUEST)
        // 没抓取到则调用浏览器默认请求, 并且做缓存
        return fetch(REQUEST).then(function (response) {
          // 复制一份
          let responseClone = response.clone()
          // console.log(responseClone)
          // 打开对应的版本库
          caches.open('v1').then(function (cache) {
            // cache 将请求和响应, 同时放进缓存
            cache.put(REQUEST, responseClone)
          })
          return response
        }).catch(function () {
          return caches.match('')
        })

      }
    })
  )
})
