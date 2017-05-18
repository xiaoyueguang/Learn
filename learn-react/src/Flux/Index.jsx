import React, { Component } from 'react';

import {AppDispatcher, countStore} from './store.js'

class App extends Component {
  constructor () {
    super()
    this.click = this.click.bind(this)
  }
  click () {
    AppDispatcher.dispatch({
      actionName: 'add'
    })
    // 不太建议用这个更新
    this.forceUpdate()
  }
  componentDidMount () {
    // countStore.bind('change', this.forceUpdate)
  }
  render () {
    return (
      <div>
        <button onClick={this.click}>{countStore.count}</button>
        <button onClick={this.click}>{countStore.count}</button>
      </div>
    )
  }
}

export default App