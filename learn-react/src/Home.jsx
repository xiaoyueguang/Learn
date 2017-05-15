import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom'


class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello World from HOME.JSX</h1>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/Ruan">阮一峰的教程</Link></li>
        <li><Link to="/Official">官方教程</Link></li>
        <li><Link to="/Router">路由</Link></li>
      </div>
    )
  }
}


export default App