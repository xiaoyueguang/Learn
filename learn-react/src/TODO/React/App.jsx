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
    window.a = this
  }
  
  items = () => {
    if (this.state.filters === '') {
      return this.state.oriItems
    } else {
      return this.state.oriItems.filter(({done}) => done === (this.state.filters === 'done'))
    }
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

  del = id => {
    let oriItems = [...this.state.oriItems]
    let index = this.getIndex(id)
    oriItems.splice(index, 1)
    this.setState({
      oriItems
    })
  }

  done = id => {
    let oriItems = [...this.state.oriItems]
    let index = this.getIndex(id)
    oriItems[index].done = !oriItems[index].done
    this.setState({
      oriItems
    })
  }

  getIndex = id_argu => {
    let index = -1
    this.state.oriItems.forEach(({id}, ind) => {
      if (id === id_argu) index = ind
    })
    return index
  }

  change = filters => {
    this.setState({
      filters
    })
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
          <div
            className={this.state.filters === '' ? 'active' : ''}
            onClick={this.change.bind(this, '')}
          >全部</div>
          <div
            className={this.state.filters === 'done' ? 'active' : ''}
            onClick={this.change.bind(this, 'done')}
          >已完成</div>
          <div
            className={this.state.filters === 'undone' ? 'active' : ''}
            onClick={this.change.bind(this, 'undone')}
          >未完成</div>
        </div>
        <div className="lists">
          {this.items().map(({id, done, text}) => (
            <div className={done ? 'list done' : 'list'} key={id}>
              <div className="text">{text}</div>
              <div className="btn success" onClick={this.done.bind(this, id)}>完成</div>
              <div className="btn" onClick={this.del.bind(this, id)}>删除</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App