import React, { Component } from 'react';
import Learn1 from './Ruan/Learn-1'
import Learn2 from './Ruan/Learn-2'
import Learn3 from './Ruan/Learn-3'
import Learn4 from './Ruan/Learn-4'
import Learn5 from './Ruan/Learn-5'
import Learn6 from './Ruan/Learn-6'
import Learn7 from './Ruan/Learn-7'
const isOfficial = true

// 阮一峰的教程
class Ruan extends Component {
  render () {
    return (
      <div>
        <h4>Learn1</h4>
        <Learn1 />
        <h4>Learn2</h4>
        <Learn2 />
        <h4>Learn3</h4>
        <Learn3 />
        <h4>Learn4</h4>
        <Learn4 />
        <h4>Learn5</h4>
        <Learn5 />
        <h4>Learn6</h4>
        <Learn6 />
        <h4>Learn7</h4>
        <Learn7 />
      </div>
    )
  }
}
import JSX from './Official/JSX.jsx'
function officalRender (title, Component) {
  return (
    <div>
      <h4>{title}</h4>
      <Component />
    </div>
  )
}

// 官方教程
class Official extends Component {
  render () {
    return (
      <div>
        {officalRender('JSX', JSX)}
      </div>
    )
  }
}

class App extends Component {
  render () {
    if (!isOfficial) {
      return (<Ruan />)
    } else {
      return (<Official />)
    }
  }
}


export default App;
