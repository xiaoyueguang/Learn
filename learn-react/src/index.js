import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import Learn1 from './Learn/Learn-1'
import Learn2 from './Learn/Learn-2'
import Learn3 from './Learn/Learn-3'

ReactDOM.render(
  <div>
    <Learn1 />
    <Learn2 />
    <Learn3 />
  </div>,
  document.getElementById('root')
);


React.Children.map(val => console.log(val))