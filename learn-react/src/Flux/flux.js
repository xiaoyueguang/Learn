/**
 * Flux是一种架构思想.
 * 基本分为 View, Action, Dispatcher 以及 Store
 * 在用户进入页面的时候, Flux 会从Store中读取数据. 并渲染到View中.
 * 用户在View中进行操作, Flux会根据用户行为, 调用对应的 Action.
 * Flux在接受到 Action后, 会利用 Dispatcher 派发器, 来调整 Store中的内容.
 * 继而重新渲染View.
 */

import {Dispatcher} from 'flux'

const EventEmitter = require('events').EventEmitter

export const AppDispatcher = new Dispatcher()


// class CounterStore extends ReduceStore {
//   constructor () {
//     super(dispatcher)
//   }
//   static state = {
//     count: 0
//   }

// }

export const countStore = Object.assign({}, EventEmitter.prototype, {
  count1: 0,
  count2: 0,
  // 函数式. 不修改原值. 对数据的处理可通过 FP(函数式) 的方式来获取数据
  sum () {
    return this.count1 + this.count2
  },
  // 触发更新方法
  emitChange () {
    this.emit('change')
  },
  // 添加监听
  addChangeListener (callback) {
    this.on('change', callback)
  }
})
// register 是对 Dispatcher 注册回调方法
// register里的参数 即 dispatch 中的传参
// actions中会对 store中的数据进行调整.
// 调整完成后对页面执行 forceUpdate 更新界面
AppDispatcher.register(({actionType, payload}) => {
  if (actionType === 'add1') {
    countStore.count1++
  }
  if (actionType === 'add2') {
    countStore.count2++
  }
  countStore.emitChange()
})

// export const counter = new CounterStore


