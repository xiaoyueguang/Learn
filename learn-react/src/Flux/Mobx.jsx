import React, { Component } from 'react';

/**
 * Redux中的 state, 只能通过Redux中的dispatch 来更改.
 */

import {observer, observable, extendObservable, autorun} from 'mobx'

var call = () => {console.log(111)}
function hello () {
  extendObservable(this, {
    text: 'World',
    get msg () {
      call()
      return `Hello ${this.text}!`
    }
  })
}
const text = new hello()
class Mobxx extends Component {
  componentDidMount () {
    call = () => {this.forceUpdate()}
  }
  render () {
    return (
      <h4>{text.msg}</h4>
    )
  }
}

window.text = text

export default Mobxx