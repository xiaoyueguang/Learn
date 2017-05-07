import React, { Component } from 'react';

const words = ['A', 'B']

// 返回一个数组. 数组也能直接在JSX里引用
const expan = arr => arr.map((val, index) => <p key={index}>expan: {val}</p>)

// react的 render里, 遇到<开头, 为 html 代码
// 遇到 {} 里面则转为 JS表达式.. 这就是JSX
class App extends Component {
  render() {
    return (
      <div className="test">
        {words.map((word, index) => <p key={index}>Hello, {word}!</p>)}
        <div>
          {expan(words)}
        </div>
      </div>
    )
  }
}

export default App