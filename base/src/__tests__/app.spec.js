import React from 'react'
// here we are not using browserRouter
// because we want to create our own history for this test

import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'

import {render} from '@testing-library/react'
import {screen, waitFor} from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import App from '../App'

function renderWithRouter(
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
    ...render(ui, {wrapper: Wrapper, ...renderOptions}),
    history,
  }
}

test('renders homepage by default and can navigate to about', async () => {
  renderWithRouter(<App />)
  await waitFor(() => screen.getByText(/Homepage/i))
  // const link = await waitFor(() => screen.getByRole('link', {name: /about/i}))
  screen.debug()
  const link = screen.getByRole('link', {name: /about/i})
  userEvent.click(link)
  screen.debug()
  // await waitFor(() => screen.getByText(/About page/i))
})
