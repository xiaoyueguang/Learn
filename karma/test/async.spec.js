import {sleep, sleepPromise} from '../src/sleep'
import {expect} from 'chai'

let time1 = 0.5
let time2 = 0.6

describe('异步测试: ', () => {
  it('通过回调', done => {
    let x = true;

    sleep(() => {
      x = false;
    }, time1)
    // 抹茶的time时间需要在karma.conf.js里设置
    setTimeout(() => {
      expect(x).to.be.equal(false);
      done()
    }, time2 * 1000)
  })

  it('通过Promise', done => {
    let x = true;
    sleepPromise(time1).then(() => {
      x = false
    })

    setTimeout(() => {
      expect(x).to.be.equal(false);
      done()
    }, time2 * 1000)
  })

  it('async/await', done => {
    let x = true;

    async function exec () {
      await sleepPromise(time1)
      x = false
    }
    exec()

    setTimeout(() => {
      expect(x).to.be.equal(false);
      done()
    }, time2 * 1000)

  })
})
