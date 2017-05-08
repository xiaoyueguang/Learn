import React, { Component } from 'react';
/**
 * 表单实现双向绑定. 设置 state. 通过change 改变
 */
class Form extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }
  input = e => {
    // 此处的 e 是经过 react 包装后的 一个事件代理
    this.setState({
      value: e.target.value
    })
  }
  render () {
    return (
      <div>
        <input type="text" onInput={this.input} value={this.state.value} />
        <span>输入的值为: {this.state.value}</span>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <Form />
    )
  }
}

export default App