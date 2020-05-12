// testing app.js, example of integration test
import React from 'react'
import {render} from '@testing-library/react'
import user from '@testing-library/user-event'
import {submitForm as mockSubmitForm} from '../api'
import App from '../app'

//we are mocking the api to be sure that
//we dont do any http call while testing
jest.mock('../api')

test('can fill out a form across multiple pages', async () => {
  // this is what we would get if we were hitting the server directly
  mockSubmitForm.mockResolvedValueOnce({success: true})
  const testData = {food: 'test food', drink: 'test drink'}
  const {findByLabelText, findByText} = render(<App />)

  user.click(await findByText(/fill.*form/i))
  await user.type(await findByLabelText(/food/i), testData.food)
  user.click(await findByText(/next/i))
  await user.type(await findByLabelText(/drink/i), testData.drink)
  user.click(await findByText(/review/i))

  expect(await findByLabelText(/food/i)).toHaveTextContent(testData.food)
  expect(await findByLabelText(/drink/i)).toHaveTextContent(testData.drink)

  user.click(await findByText(/confirm/i, {selector: 'button'}))

  // checking that our mock is call properly
  expect(mockSubmitForm).toHaveBeenCalledWith(testData)
  expect(mockSubmitForm).toHaveBeenCalledTimes(1)

  user.click(await findByText(/home/i))

  expect(await findByText(/welcome home/i)).toBeInTheDocument()
})
