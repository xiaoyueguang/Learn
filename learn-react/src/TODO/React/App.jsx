import React, { Component } from 'react';
import '../style.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      oriItems: [],
      filters: '',
      msg: 'TODO',
      id: 0
    }
    this.add = this.add.bind(this)
  }

  add (e) {
    if (e.keyCode === 13) {
      const oriItems = this.state.oriItems
      oriItems.push({
        id: this.state.id,
        done: false,
        text: e.target.value
      })
      e.target.value = ''
      this.setState({
        oriItems,
        id: this.state.id + 1
      })
    }
  }

  render () {
    return (
      <div className="wrap">
        <h1>{this.state.msg}</h1>
        <input
          className="input"
          type="text"
          onKeyDown={this.add}
        />
        <div className="filter">
          <div>全部</div>
          <div>已完成</div>
          <div>未完成</div>
        </div>
        <div className="lists">
          {this.state.oriItems.map(({id, done, text}) => (
            <div className="list" key={id}>
              <div className="text">{text}</div>
              <div className="btn success">完成</div>
              <div className="btn">删除</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App