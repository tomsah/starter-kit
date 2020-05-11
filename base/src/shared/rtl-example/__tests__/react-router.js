import React from 'react'
// here we are not using browserRouter
// because we want to create our own history for this test
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'

import {render as rtlRender, fireEvent} from '@testing-library/react'
import {Main} from '../main'

function render(
  ui,
  {
    route = '/',
    history = createMemoryHistory({initialEntries: [route]}),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({children}) {
    return <Router history={history}>{children}</Router>
  }
  return {
    ...rtlRender(ui, {wrapper: Wrapper, ...renderOptions}),
    history,
  }
}

test('main renders about and home and I can navigate to those pages', () => {
  const {getByText, getByRole} = render(<Main />)
  expect(getByRole('heading')).toHaveTextContent(/home/i)
  fireEvent.click(getByText(/about/i))
  expect(getByRole('heading')).toHaveTextContent(/about/i)
})

test('landing on a bad page shows no match component', () => {
  const {getByRole} = render(<Main />, {
    route: '/something-that-does-not-match',
  })
  expect(getByRole('heading')).toHaveTextContent(/404/i)
})
