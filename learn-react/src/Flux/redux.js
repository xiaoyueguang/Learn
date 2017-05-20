import {createStore} from 'redux'
// 设置一个默认的值
export const defaultState = {
  count1: 0,
  count2: 0
}

const reducer = (state = defaultState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'ADD1':
      return Object.assign({}, state, {
          count1: state.count1 + 1
      })
      // 必须为纯函数. 不能更改原有的 state. 因此以下的方式 会有个警告
      // state.count1 = state.count1 + 1
      // return state
    case 'ADD2':
      return {
        ...state,
        ...{
          count2: state.count2 + 1
        }
      }
    default:
      return state
  }
}

const store = createStore(reducer, 
  // 触发 调试工具
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
