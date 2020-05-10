// testing ../error-boundary.js

import React from 'react'
import {render, fireEvent} from '@testing-library/react'

// import the needed function from the  mocked module
import {reportError as mockReportError} from '../api'
import {ErrorBoundary} from '../error-boundary'

//transform all the import function of that module to mock jets function
jest.mock('../api')

// spying on console.error, when call return nothing instead
// this stopped react and jsdom to print console.error in the terminal
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  //restoring console.error behaviour between test

  // eslint-disable-next-line no-console
  console.error.mockRestore()
})

afterEach(() => {
  // reset all mock between test
  jest.clearAllMocks()
})

function Bomb({shouldThrow}) {
  if (shouldThrow) {
    throw new Error('💣')
  } else {
    return null
  }
}

test('calls reportError and renders that there was a problem', () => {
  // set the return value of the mock function
  mockReportError.mockResolvedValueOnce({success: true})
  const {rerender, getByText, getByRole, queryByRole, queryByText} = render(
    <Bomb />,
    {wrapper: ErrorBoundary}, // this will wrap Bomb with ErrorBoundary
  )

  rerender(<Bomb shouldThrow={true} />)

  const error = expect.any(Error)
  const info = {componentStack: expect.stringContaining('Bomb')}
  expect(mockReportError).toHaveBeenCalledWith(error, info)
  expect(mockReportError).toHaveBeenCalledTimes(1)

  // because we are mocking console.error it is a good idea to
  // check that it is been called properly by jsdom and react
  // eslint-disable-next-line no-console
  expect(console.error).toHaveBeenCalledTimes(2)

  expect(getByRole('alert').textContent).toMatchInlineSnapshot(
    `"There was a problem."`,
  )

  //This reset the number of call but leave the mock intact
  // eslint-disable-next-line no-console
  console.error.mockClear()
  mockReportError.mockClear()

  rerender(<Bomb />)

  fireEvent.click(getByText(/try again/i))
  expect(mockReportError).not.toHaveBeenCalled()
  // eslint-disable-next-line no-console
  expect(console.error).not.toHaveBeenCalled()
  expect(queryByRole('alert')).not.toBeInTheDocument()
  expect(queryByText(/try again/i)).not.toBeInTheDocument()
})
