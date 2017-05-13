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

ReactDOM.render(
  <Router history={Router}>
    <div>
      {/* exact 路由组件上加 exact 是为了精确匹配. */}
      <Route exact path="/" component={Home} />
      <Route path="/Official" component={Official} />
      <Route path="/Ruan" component={Ruan} />
      <Route path="/Router" component={RouterComponent} />
    </div>
  </Router>,
  document.getElementById('root')
);

