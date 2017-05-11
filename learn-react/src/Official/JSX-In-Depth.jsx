import React, { Component } from 'react';

// JSX 可以作为一个对象的属性值
const components = {
  hello () {
    return <span>Hello </span>
  },
  world: <span>World!</span>
}

class App extends Component {
  render () {
    return (
      <div>
        <components.hello />
        {components.world}
      </div>
    )
  }
}

export default App