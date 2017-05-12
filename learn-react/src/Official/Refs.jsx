import React, { Component } from 'react';
/**
 * 可能在某些场合下. 我们需要获取一个真正的 DOM节点.
 * 因为 React 的原因. 会导致dom节点有可能会消失或没渲染出来.
 * 这时候不能通过原先的 document.getElementById 等方法获取
 * 只能通过 React 的 refs属性去获取
 */

/**
 * React 不像 Vue. 有个 v-model指令
 * 这会导致 在 React 里 处理表单变的非常麻烦.
 * 第一 我们不会给所有的表单元素添加 ref
 * 第二 我们也不会给每个表单都添加value值 和 change事件.
 */

/**
 * 受控组件 与 非受控组件
 * 非受控组件 表示该组件 没有任何经过js绑定的值和方法.
 */

class App extends Component {
  constructor () {
    super()
    this.focus = this.focus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  focus (e) {
    // 通过当前组件的 refs 能获取到所有的 refs节点
    this.refs.input1.focus()
    e.preventDefault()
    return false
  }

  handleSubmit (e) {
    console.log(this.refs.input1.value, this.refs.input2.value)
    e.preventDefault()
    return false
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref="input1"/>
          </label>
          <br/>
          <label>
            Age:
            <input type="text" ref="input2"/>
          </label>
          <br/>
          <button onClick={this.focus}>设置焦点</button>
          <button>提交</button>
        </form>
      </div>
    )
  }
}

export default App