import React, { Component } from 'react';
import './App.css'

import Learn1 from './Ruan/Learn-1'
import Learn2 from './Ruan/Learn-2'
import Learn3 from './Ruan/Learn-3'
import Learn4 from './Ruan/Learn-4'
import Learn5 from './Ruan/Learn-5'
import Learn6 from './Ruan/Learn-6'
import Learn7 from './Ruan/Learn-7'

// 阮一峰的教程
export class Ruan extends Component {
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
function officalRender (title, Component) {
  return (
    <div>
      <h3>{title}</h3>
      <Component />
    </div>
  )
}

import JSX from './Official/JSX.jsx'
import Components from './Official/Components.jsx'
import State from './Official/State-Lifecycle.jsx'
import Handling from './Official/Handling-Events.jsx'
import Conditional from './Official/Conditional-Rendering.jsx'
import List from './Official/Lists-Keys.jsx'
import Forms from './Official/Forms.jsx'

import Depth from './Official/JSX-In-Depth.jsx'
import PropTypes from './Official/Props-Type.jsx'
import Refs from './Official/Refs.jsx'
import Performance from './Official/Optimizing-Performance.jsx'


// 官方教程
export class Official extends Component {
  render () {
    return (
      <div>
        <div className="flex">
          {officalRender('JSX', JSX)}
          {officalRender('Components', Components)}
          {officalRender('State And Lifecycle', State)}
          {officalRender('Handling Events', Handling)}
          {officalRender('Conditional Rendering', Conditional)}
          {officalRender('Lists and Keys', List)}
          {officalRender('Forms', Forms)}
        </div>
        <div className="flex">
          {officalRender('JSX-In-Depth', Depth)}
          {officalRender('Typechecking With PropTypes', PropTypes)}
          {officalRender('Refs and the DOM', Refs)}
          {officalRender('Optimizing Performance', Performance)}

        </div>
      </div>
    )
  }
}

import FluxIndex from './Flux/Index.jsx'

export class FluxComponent extends Component {
  render () {
    return (
      <div>
        <div className="flex">
          {officalRender('Flux', FluxIndex)}
        </div>
      </div>
    )
  }
}

