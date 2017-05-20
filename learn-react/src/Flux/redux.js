// 引用中间件 applyMiddleware
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
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
    case 'PLUS':
      console.log(action)
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve({...action, ...{
        //   payload: {
        //     count2: store.getState().count2 + 1
        //   }
        // }})
        resolve({type: 'ADD2'})
      }, 1000)
    }).then(action => next(action))
    // if (count2 === 10) {
    //   return next(action)
    // } else {
    //   setTimeout(() => {
    //     next(action)
    //   })
    // }
  }
  return next(action)
}

const store = createStore(reducer,
  // 触发 调试工具
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(log)
);

export default store
