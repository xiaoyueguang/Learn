import {add} from '../src/add'

describe('add: ', () => {
  it('add(1, 2) === 3', () => {
    expect(add(1, 2)).toBe(3)
  })
  it('add(2, 2) === 4', () => {
    expect(add(2, 2)).toBe(4)
  })
})

