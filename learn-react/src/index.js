import React from 'react';
import ReactDOM from 'react-dom';
import {Ruan, Official} from './App';
import './index.css';

import Home from './Home.jsx'
import RouterComponent from './Router/Router.jsx'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

/**
 * match 可抓取到 match 的信息
 */
const RouterID = ({match}) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

ReactDOM.render(
  <Router history={Router}>
    <div>
      {/* exact 路由组件上加 exact 是为了精确匹配. */}
      <Route exact path="/" component={Home} />
      <Route path="/Official" component={Official} />
      <Route path="/Ruan" component={Ruan} />
      <Route path="/Router" component={RouterComponent} />
      <Route path="/:id" component={RouterID} />
    </div>
  </Router>,
  document.getElementById('root')
);

