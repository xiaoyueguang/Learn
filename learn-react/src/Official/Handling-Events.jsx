import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super()
    this.state = {
      num: 0
    }
  }
  click = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render () {
    // 绑定方法. 事件得用 驼峰写法
    return (
      <div>
        <button onClick={this.click}>{this.state.num}</button>
      </div>
    )
  }
}

export default App