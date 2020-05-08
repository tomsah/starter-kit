import React from 'react'
import ReactDOM from 'react-dom'
import {getQueriesForElement} from '@testing-library/dom'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  //here we are using a regex pattern rather than a string.
  // this is making the test more resilient to changes
  //and your end user doesnt care of the casing, it should work
  const {getByLabelText} = getQueriesForElement(div)
  const input = getByLabelText(/favorite Number/i)
  expect(input).toHaveAttribute('type', 'number')
})
