import React, { Component } from 'react';

// 按照条件渲染DOM

const HasLogin = (<h4>已登录</h4>)
const NotLogin = (<h4>未登录</h4>)

const IsLogin = props => {
  if (props.isLogin) {
    return HasLogin
  } else {
    return NotLogin
  }
}


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogin: false,
      ready: false
    }
    this.click = this.click.bind(this)
    setTimeout(() => {
      this.setState({
        ready: true
      })
    }, 1000)
  }
  click () {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }
  render () {
    if (!this.state.ready) {
      // 不显示的时候返回NULL. 节省性能
      return null
    }
    return (
      <div>
        <IsLogin isLogin={this.state.isLogin} />
        <IsLogin isLogin={!this.state.isLogin} />
        {this.state.isLogin && HasLogin}
        <button onClick={this.click}>切换</button>
      </div>
    )
  }
}

export default App