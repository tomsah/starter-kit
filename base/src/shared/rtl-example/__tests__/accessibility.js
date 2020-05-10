// self contain file.
// testing not related to any files
// example of using jest-axe

import React from 'react'
import {render} from '@testing-library/react'
import {axe} from 'jest-axe'

function Accessibility() {
  return (
    <form>
      <label htmlFor="email"> Email</label>
      <input id="email" placeholder="email" />
    </form>
  )
}

test('the form is accessible', async () => {
  const {container} = render(<Accessibility />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
