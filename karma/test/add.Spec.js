import {add} from '../src/add'
import {expect} from 'chai'

describe('add: ', () => {
  it('add(1, 2) === 3', () => {
    expect(add(1, 2)).to.be.equal(3)
  })
  it('add(2, 2) === 4', () => {
    expect(add(2, 2)).to.be.equal(4)
  })
})

