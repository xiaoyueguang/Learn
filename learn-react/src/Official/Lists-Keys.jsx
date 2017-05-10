import React, { Component } from 'react';

const ListWithKey = props => {
  return (
    <div>
      {props.arr.map(num =>
        // 有key值的时候. 不会引起整个列表重新渲染
        // key值必须为单一
        <span key={num}>{num}</span>
      )}
    </div>
  )
}

/*const ListNoKey = props => {
  return (
    <div>
      {props.arr.map(num =>
        // 无key值时, 会引起整个列表重新渲染. 并且会有警告
        <span>{num}</span>
      )}
    </div>
  )
}*/

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    this.click = this.click.bind(this)
  }

  click () {
    const arr = this.state.arr
    const num = arr.shift()
    arr.push(num)
    this.setState({
      arr
    })
  }

  render () {
    return (
      <div>
        <ListWithKey arr={this.state.arr} />
        {/*<ListNoKey arr={this.state.arr} />*/}
        <button onClick={this.click}>改变</button>
      </div>
    )
  }
}

export default App