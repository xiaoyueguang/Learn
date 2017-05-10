import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      select: 3
    }
    this.input = this.input.bind(this)
    this.change = this.change.bind(this)
  }

  input (e) {
    this.setState({
      value: e.target.value
    })
  }

  change (e) {
    this.setState({
      select: e.target.value
    })
  }
  render () {
    return (
      <div>
        <span>输入的值为: {this.state.value}</span>
        <br/>
        <input onInput={this.input} value={this.state.value} />
        <br/>
        <textarea onInput={this.input} value={this.state.value} />
        <br/>
        <span>选择的值为: {this.state.select}</span>
        <br/>
        <select onChange={this.change} value={this.state.select}>
          {[1, 2, 3].map(num => <option key={num} value={num}>{num}</option>)}
        </select>
        {[1, 2, 3].map(num =>
          <input
            type="radio"
            onChange={this.change}
            name="select"
            key={num}
            value={num}
            checked={Number(this.state.select) === num}
          />
        )}
      </div>
    )
  }
}

export default App