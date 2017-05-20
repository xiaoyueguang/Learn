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

class App extends Component {
  render () {
    return (
      <div>
        <h1>Flux</h1>
        <FluxComponent />
        <h1>Redux</h1>
        <ReduxComponent />
      </div>
    )
  }
}

export default App