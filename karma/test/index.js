const app = require('../src/index.js')

describe('index.js: ', () => {
  it('add(1, 2) === 3', () => {
    expect(app.add(1, 2)).toBe(3)
  })
  it('add(2, 2) === 4', () => {
    expect(app.add(2, 2)).toBe(6)
  })
})