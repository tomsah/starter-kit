import React from 'react'
import {render, act} from '@testing-library/react'
import {Countdown} from '../countdown'

beforeAll(() => {
  //return nothing to keep our console clean
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  // eslint-disable-next-line no-console
  console.error.mockRestore()
})

afterEach(() => {
  jest.clearAllMocks()
  jest.useRealTimers()
})

test('does not attempt to set state when unmounted (to prevent memory leaks)', () => {
  jest.useFakeTimers()
  const {unmount} = render(<Countdown />)
  unmount()
  act(() => jest.runOnlyPendingTimers())
  // eslint-disable-next-line no-console
  expect(console.error).not.toHaveBeenCalled()
})
