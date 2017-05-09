import React, { Component } from 'react';

/**
 * 关于 Component 以及 React.Component
 * 区别上是 方法中. Component中的this 会读取不到当前实例. 在 箭头函数中才能读取到.
 */
class Clock extends Component {
  constructor (props) {
    // 标签上传来的值
    super(props)
    // 定义一个 state. 
    this.state = {
      date: new Date()
    }
  }

  tick = () => {
    /**
     * 必须通过 this.setState 来触发页面更新
     * setState方法是异步的. 可通过 this.setState((prevState, props) => {}) 来更新值
     * 方法里多个 this.setState会导致多次更新. 多次更新会被合并
     * 可通过先调整 this.state. 然后再通过this.setState来进行更新
     */

    this.setState({
      date: new Date()
    })
  }

  componentDidMount () {
    console.dir(this)
    console.log('mounted')
    this.timeId = setInterval(this.tick)
  }

  componentWillUnmount () {
    console.log('unmounting')
    clearInterval(this.timeId)
  }

  render () {
    return (
      <p>{this.state.date.toLocaleTimeString()}</p>
    )
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      show: false
    }
  }
  // 通过箭头函数 读取到当前的 this
  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render () {
    if (this.state.show) {
      return (
        <div>
          <button onClick={this.toggle}>点击隐藏</button>
          <Clock />
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.toggle}>点击显示</button>
        </div>
      )
    }
  }
}

export default App