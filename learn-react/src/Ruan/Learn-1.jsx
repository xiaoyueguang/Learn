import React, { Component } from 'react';

// react 只能有一个顶级标签. 有两个顶级标签时 会报错
class App extends Component {
  render() {
    return (
      <div className="learn-1">
        <p>Hello World！</p>
      </div>
      // <div>
        // 第二个标签
      // </div>
    )
  }
}

export default App
