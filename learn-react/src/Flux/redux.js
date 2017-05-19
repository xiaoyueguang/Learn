import {createStore} from 'redux'

export const defaultState = {
  count1: 0,
  count2: 0
}

const reducer = (state = defaultState, action) => {
  if (action.type === 'ADD1') {
    return state.count1 + 1
  }
  if (action.type === 'ADD2') {
    return state.count2 + 1
  }
  return state
}

const store = createStore(reducer, 
  // 触发 调试工具
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
