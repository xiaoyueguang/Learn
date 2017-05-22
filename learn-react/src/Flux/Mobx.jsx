/**
 * Redux中的 state, 只能通过Redux中的dispatch 来更改.
 */

import {observable, extendObservable} from 'mobx'

// @observable
function a () {
  extendObservable(this, {
    title: 'Hello',
    finished: false
  })
}
window.a = a

