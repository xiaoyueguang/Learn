import {sleep, sleepPromise} from '../src/sleep'
import {expect} from 'chai'

let time1 = 0.5
let time2 = 0.6

describe('异步测试: ', function () {
  it('通过回调', function (done) {
    let x = true;

    sleep(function () {
      x = false;
    }, time1)
    // 抹茶的time时间需要在karma.conf.js里设置
    setTimeout(function () {
      expect(x).to.be.equal(false);
      done()
    }, time2 * 1000)
  })

  it('通过Promise', function (done) {
    let x = true;
    sleepPromise(time1).then(function () {
      x = false
    })

    setTimeout(function () {
      expect(x).to.be.equal(false);
      done()
    }, time2 * 1000)
  })

  it('async/await', function (done) {
    let x = true;

    async function exec () {
      await sleepPromise(time1)
      x = false
    }
    exec()

    setTimeout(function () {
      expect(x).to.be.equal(false);
      done()
    }, time2 * 1000)

  })
})
