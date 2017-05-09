import React, { Component } from 'react';

// JSX 可以用多种方式写
const JSX1 = () => (<h4>JSX可通过方法返回</h4>)
const JSX2 = <h4>JSX可赋值给变量</h4>
class JSX3 extends Component {
  render () {
    return (
      <h4>通过创造一个类</h4>
    )
  }
}

// 只有通过标签方式去引用的JSX, 可在 REACT调试工具中找到该组件
class App extends Component {
  render () {
    return (
      <div>
        <JSX1></JSX1>
        {JSX2}
        <JSX3></JSX3>
      </div>
    )
  }
}

export default App