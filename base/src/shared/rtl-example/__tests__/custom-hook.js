// testing use-counter
import React from 'react'
import {render, act} from '@testing-library/react'
import {useCounter} from '../use-counter'

function setup({initialPops} = {}) {
  const result = {}
  // a custom hooks cannot be call by itself so test it you have
  // to wrap it in a fake component
  function TestComponent(props) {
    result.current = useCounter(props)
    return null
  }

  render(<TestComponent {...initialPops} />)
  return result
}

test('expose the count and increment/decrement', () => {
  const result = setup()
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

test('allows customization of the initial count', () => {
  const result = setup({initialPops: {initialCount: 3}})
  expect(result.current.count).toBe(3)
})

test('allows customization of the step', () => {
  const result = setup({initialPops: {step: 2}})
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(2)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})
