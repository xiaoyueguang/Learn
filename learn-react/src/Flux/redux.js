// 引用中间件 applyMiddleware
import {createStore, applyMiddleware} from 'redux'
// import promiseMiddleware from 'redux-promise'
// import {createLogger} from 'redux-logger'
// const logger = createLogger()

// 设置一个默认的值
export const defaultState = {
  count1: 0,
  count2: 0
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD1':
      return Object.assign({}, state, {
          count1: state.count1 + 1
      })
      // 必须为纯函数. 不能更改原有的 state. 因此以下的方式 会有个警告
      // state.count1 = state.count1 + 1
      // return state
    case 'ADD2':
      // let obj = {}
      // 异步 不好执行. 需要用到中间件
      // setTimeout(() => {
      //   obj.count2 = state.count2 + 1
      // }, 1000)
      return {
        ...state,
        ...{
          count2: state.count2 + 1
        }
      }
    case 'DOWN':
      return {
        ...state,
        ...{
          count2: state.count2 - 1
        }
      }
    case 'PLUS':
      console.log('PLUS', action)
      return {...state, ...action.payload}
    default:
      return state
  }
}
/**
 * 一个标准的 中间件方法.
 * @param {object} store 默认方法. 有 getState 以及 dispatch 方法
 * @param {object} dispatch 方法. 触发下个事件
 * @param {object} 当前触发的action
 */
const log = store => next => action => {
  if (action.type === 'PLUS') {
    console.log('log1', action)
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({type: 'ADD2'})
    //   }, 200)
    // }).then(() => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve({type: 'ADD2'})
    //     }, 300)
    //   })
    // })
    // 只有执行了 next. 中间件才会将数据传递给下一个中间件
    // 在一个中间件中可执行多个next. 并不冲突
    // 当有中间件的时候
    // .then(action => next(action))
    setTimeout(() => {
      next({type: 'ADD2'})
    }, 1000)
    // 可在
    setTimeout(() => {
      next({type: 'DOWN'})
    }, 2000)
    return next({...action, ...{log1: 'log1中的数据'}})
  }
  return next(action)
}

const log2 = store => next => action => {
  if (action.type === 'PLUS') {
    console.log('log2', action)
    setTimeout(() => {
      next({...action, ...{log2: 'log2中的数据'}})
    }, 1000)
    // 返回可为空 或者 Promise. 可延迟将数据传入下个中间件
    // 当 return 为空时, 或者没有 next时会导致数据 redux 停留到当前中间件.
    return
  }
  return next(action)
}

const log3 = store => next => action => {
  if (action.type === 'PLUS') {
    return new Promise(resolve => {
      console.log('log3', action)
      setTimeout(() => {
        resolve()
      }, 1000)
    }).then(() => next({...action, ...{log3: 'log3中的数据'}}))
  }
  return next(action)
}

const store = createStore(reducer,
  // 触发 调试工具
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // 中间件 会按照 applyMiddleware 中传入的顺序执行
  applyMiddleware(log, log3, log2)
);

export default store
