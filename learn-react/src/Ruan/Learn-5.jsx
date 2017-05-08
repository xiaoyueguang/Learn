import React, { Component } from 'react';

class App extends Component {
  onClick = () => {
    // 组件里 获取某个 真实DOM元素. 需要通过 refs 来读取
    console.log(this.refs.input.value)
  }
  render () {
    return (
      <div>
        <input type="text" ref="input"/>
        <button onClick={this.onClick}>点击</button>
      </div>
    )
  }
}

export default App