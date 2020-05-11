// testing use-counter
import React from 'react'
import {render, act} from '@testing-library/react'
import {useCounter} from '../use-counter'

test('expose the count and increment/decrement', () => {
  let result
  // a custom hooks cannot be call by itself so test it you have
  // to wrap it in a fake component
  function TestComponent() {
    result = useCounter()
    return null
  }

  render(<TestComponent />)
  expect(result.count).toBe(0)
  act(() => result.increment())
  expect(result.count).toBe(1)
  act(() => result.decrement())
  expect(result.count).toBe(0)
})
