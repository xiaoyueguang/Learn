import React, { Component } from 'react';

import {AppDispatcher, countStore} from './flux.js'
import store from './redux.js'

class FluxComponent extends Component {
  constructor () {
    super()
    this.click1 = this.click1.bind(this)
    this.click2 = this.click2.bind(this)
  }
  click1 () {
    // 用户进行操作后, 会调用对应的 action
    AppDispatcher.dispatch({
      actionType: 'add1'
    })
    // 不太建议用这个更新
    // this.forceUpdate()
  }
  click2 () {
    AppDispatcher.dispatch({
      actionType: 'add2'
    })
    // this.forceUpdate()
  }
  componentDidMount () {
    // 绑定监听 在值更新后 触发 传入的回调
    countStore.addChangeListener(this.forceUpdate.bind(this))
  }

  render () {
    // 这里 用户会看到界面. 界面通过countStore中读取数据并渲染出来
    return (
      <div>
        <span>总数: {countStore.sum()}</span>
        <br/>
        <button onClick={this.click1}>{countStore.count1}</button>
        <button onClick={this.click2}>{countStore.count2}</button>
      </div>
    )
  }
}

let state = store.getState()
class ReduxComponent extends Component {
  constructor () {
    super()
    this.click1 = this.click1.bind(this)
    this.click2 = this.click2.bind(this)
  }

  click (index) {
    store.dispatch({
      type: 'ADD' + index
    })
  }

  click1 () {
    store.dispatch({
      type: 'ADD1'
    })
  }

  click2 () {
    // store.dispatch({
    //   type: 'ADD' + index
    // })
    store.dispatch({
      type: 'PLUS'
    })
    // state = store.getState()
    // this.forceUpdate()
    
  }

  componentDidMount () {
    store.subscribe(() => {
      // 实时更新
      state = store.getState()
      this.forceUpdate()
    })
  }

  render () {
    return (
      <div>
        <span>{state.count1 + state.count2}</span>
        <br/>
        <button onClick={this.click1}>{state.count1}</button>
        <button onClick={this.click2}>{state.count2}</button>
      </div>
    )
  }
}

/**
 * React-Redux
 * React-Redux 将 组件分为两种.
 * 一种为 UI组件(纯组件, 即接受参数返回 jsx)
 * 一种为 容器组件.负责管理数据以及业务逻辑.带有自己的内部状态, 使用Redux的API.
 * 这种好处显而易见, 将数据与界面解耦.
 * 容器组件拿任意UI组件都能使用.
 * UI组件也能在任意地方进行渲染.
 */

import {connect, Provider} from 'react-redux'
import {createStore} from 'redux'

// Reducer
function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}
// 创建一个 store
const store1 = createStore(counter)

/**
 * UI组件
 */
class Counter extends Component {
  render () {
    // React-Redux 默认会把值 方法, 通过props 传过来
    const {value, onIncreaseClick} = this.props
    return (
      <div>
        <button onClick={onIncreaseClick}>{value}</button>
      </div>
    )
  }
}

/**
 * 容器组件.
 */
// 将 Redux中的值, 取出来放到对应的props中
function mapStateToProps(state) {
  return {
    value: state.count
  }
}
// 将 Redux中的方法, 取出来放到对应的props中
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch({type: 'increase'})
  }
}
// React-Redux 将 UI组件与容器组件连接. 生成容器组件
const App1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

/**
 * 接着通过 Provider根组件, 传入 store, 会自动将值赋值到里面的子组件
 */

import Mobxx from './Mobx.jsx'
console.log(Mobxx)

class App extends Component {
  render () {

    return (
      <div>
        <h1>Flux</h1>
        <FluxComponent />
        <h1>Redux</h1>
        <ReduxComponent />
        <h2>React-Redux</h2>
        <Provider store={store1}>
          <App1 />
        </Provider>
        <h1>Mobx</h1>
      </div>
    )
  }
}

export default App