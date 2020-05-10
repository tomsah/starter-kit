// testing ../favorite-number.js

import React from 'react'
import user from '@testing-library/user-event'
import {render} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const {getByLabelText} = render(<FavoriteNumber />)
  //here we are using a regex pattern rather than a string.
  // this is making the test more resilient to changes
  //and your end user doesnt care of the casing, it should work
  const input = getByLabelText(/favorite Number/i)
  expect(input).toHaveAttribute('type', 'number')
})

test('entering an invalid value shows an error message', () => {
  const {getByLabelText, getByRole, rerender, queryByRole} = render(
    <FavoriteNumber />,
  )
  const input = getByLabelText(/favorite Number/i)
  user.type(input, '10')
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
  rerender(<FavoriteNumber max={10} />)
  // check if something is not render
  expect(queryByRole('alert')).toBeNull()
})
