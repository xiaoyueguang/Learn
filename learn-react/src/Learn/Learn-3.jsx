import React, { Component } from 'react';

// 
const names = ['LiLei', 'HanMei']
// 组件的创建方式 extends Component
class Message extends Component {
  render () {
    return (
      <h5>Hello, I'm {this.props.name} in Component</h5>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        {
          names.map((name, index) => (
            <Message key={index} name={name} />
          ))
        }
      </div>
    )
  }
}

export default App