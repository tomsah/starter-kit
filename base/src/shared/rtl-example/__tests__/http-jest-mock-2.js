import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import {GreetingLoader2} from '../greeting-loader-02-dependency-injection'

test('loads greeting on click without using jest.mock', () => {
  const mockLoadGreeting = jest.fn()
  const testGreeting2 = 'TEST_GREETING 2'
  mockLoadGreeting.mockResolvedValueOnce({data: {greeting: testGreeting2}})
  const {getByLabelText, getByText} = render(
    <GreetingLoader2 loadGreeting={mockLoadGreeting} />,
  )
  const nameInput = getByLabelText(/name/i)
  const loadButton = getByText(/load greeting/i)
  nameInput.value = 'Mary'
  fireEvent.click(loadButton)
  expect(mockLoadGreeting).toHaveBeenCalledWith('Mary')
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
  waitFor(() =>
    expect(getByLabelText(/greeting/i)).toHaveTextContent(testGreeting2),
  )
})
