import {subtract} from '../src/subtract'
import {expect} from 'chai'

describe('subtract', function () {
  it('subtract(5, 4) === 1', function () {
    expect(subtract(5, 4)).to.be.equal(1)
  })
})