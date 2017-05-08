import React, { Component } from 'react';

/**
 * this.props.children 类似 Vue中的 slot. 可将父组件的子组件插入到该子组件中.
 */
class Notes extends Component {
  render () {
    return (
      <ul>
        {
          React.Children.map(this.props.children, child => <li>{child}</li>)
        }
      </ul>
    )
  }
}

class App extends Component {
  render () {
    return (
      <Notes>
        <span>Hello</span>
        <span>World</span>
        <span>!</span>
      </Notes>
    )
  }
}

export default App