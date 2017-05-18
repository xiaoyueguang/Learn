import {ReduceStore} from 'flux/utils'
import {Dispatcher} from 'flux'

export const AppDispatcher = new Dispatcher()


/**
 * Flux是一种架构思想.
 * 基本分为 View, Action, Dispatcher 以及 Store
 * 在用户进入页面的时候, Flux 会从Store中读取数据. 并渲染到View中.
 * 用户在View中进行操作, Flux会根据用户行为, 调用对应的 Action.
 * Flux在接受到 Action后, 会利用 Dispatcher 派发器, 来调整 Store中的内容.
 * 继而重新渲染View.
 */

// class CounterStore extends ReduceStore {
//   constructor () {
//     super(dispatcher)
//   }
//   static state = {
//     count: 0
//   }

// }

export const countStore = {
  count: 0
}

AppDispatcher.register(({actionName, payload}) => {
  countStore.count++
})

// export const counter = new CounterStore


