const Koa = require('koa')
const app = new Koa()

const sleep = time => new Promise(resolve => setTimeout(resolve, time * 1000))

app.use(async (ctx, next) => {
  console.log(1)
  await sleep(1)
  console.log(2)
  await next()
  ctx.body = 'Hello World'
  console.log(3)
})

app.use(async (ctx, next) => {
  console.log(4)
  await sleep(1)
  console.log(5)
  await next()
  ctx.body += 'Hello World'
  console.log(6)
})

app.listen(3000)
