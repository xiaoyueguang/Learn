export function sleep (callback, time) {
  setTimeout(() => {
    callback()
  }, time * 1000)
}

export function sleepPromise (time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time * 1000)
  })
}