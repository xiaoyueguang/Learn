import React, { Component } from 'react';

/**
 * 优化性能
 * 利用 shouldComponentUpdate 返回的 boolean 来决定是否更新值
 * 多利用 常量 优化性能
 * 尽量不改变原本的值.
 * 因此 React 多采用函数式
 */

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }
  // 利用 shouldComponentUpdate 来判断是否更新组件
  // 这里判断了 color 和 count. 如果两者不相同. 则更新组件.
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.color !== nextProps.color) {
      return true;
    }
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <button
          color={this.props.color}
          onClick={() => this.setState(state => ({count: state.count + 1}))}>
          Count: {this.state.count}
        </button>
        <div>123</div>
      </div>
    );
  }
}
const color = ['red', 'yellow', 'blue']
class App extends Component {
  constructor () {
    super()
    this.state = {
      color: color[0]
    }
    this.click = this.click.bind(this)
  }

  click () {
    this.setState({
      color: color[Math.floor(Math.random() * color.length)]
    })
  }

  render () {
    return (
      <div>
        <CounterButton color={this.state.color} />
        <button onClick={this.click}>变化</button>
      </div>
    )
  }
}

export default App