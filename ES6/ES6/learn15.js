function sleep (time) {
  return new Promise(resolve => {
    console.log(123)
    setTimeout(() => resolve(), time)
  })
}

async function exec () {
  await sleep(1000)
  console.log('1秒后执行')
}
exec()