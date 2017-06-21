import {add} from '../src/add'
import {expect} from 'chai'

describe('add: ', function () {
  it('add(1, 2) === 3', function () {
    expect(add(1,2), 3)
  })
  it('add(2, 2) === 4', function () {
    expect(add(2, 2), 4)
  })
})