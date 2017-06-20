import {subtract} from '../src/subtract'
import {expect} from 'chai'

describe('subtract', () => {
  it('subtract(5, 4) === 1', () => {
    expect(subtract(5, 4)).to.be.equal(1)
  })
})