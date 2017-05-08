import React, { Component } from 'react';

class Btn extends Component {
  constructor () {
    super()
    this.state = {
      text: '点击次数:',
      i: 0
    }
  }

  plus = () => {
    this.setState({
      i: this.state.i + 1
    })
  }

  render () {
    return (
      <button onClick={this.plus}>{this.state.text}{this.state.i}</button>
    )
  }
}

class App extends Component {
  render () {
    return (
      <Btn />
    )
  }
}

export default App