import React, { Component } from 'react';

const title = 'Hello World!'
// 根据 ./JSX.jsx 中, 对 JSX的定义方式. 这里可通过那三种方式去引用变量
// 通过方法创建的组件, 必须在 props中寻找对应的属性
const JSX1 = props => <h4>{props.title}</h4>
const JSX2 = <h4>{title}</h4>
class JSX3 extends Component {
  render () {
    /**
     * React 组件可通过 props传入
     */
    return (
      <h4>{this.props.title}</h4>
    )
  }
}

/**
 * React, 尽可能的把组件分割的更小, 来提高组件的复用.
 * React 中, 比如JSX1的方式, 尽量的将方法提纯. 不修改 传入props的值.
 */

class App extends Component {
  render () {
    return (
      <div>
        <JSX1 title={title}></JSX1>
        {JSX2}
        <JSX3 title={title}></JSX3>
      </div>
    )
  }
}

export default App