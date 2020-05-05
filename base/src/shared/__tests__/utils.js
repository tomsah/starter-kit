import {toUppercase} from '../utils'

describe('testing our utils', () => {
  it('should transform string to uppercase', () => {
    expect(toUppercase('foo')).toEqual('FOO')
  })
})
