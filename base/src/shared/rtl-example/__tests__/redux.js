import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {render as rtlRender, fireEvent} from '@testing-library/react'
import {Counter} from '../redux-counter'
import {reducer} from '../redux-reducer'

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...rtlOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>
  }
  return {
    ...rtlRender(ui, {wrapper: Wrapper, ...rtlOptions}),
    store,
  }
}

test('can render with redux with defaults', () => {
  const {getByText, getByLabelText} = render(<Counter />)
  const display = getByLabelText(/count/i)
  expect(display).toHaveTextContent('0')
  fireEvent.click(getByText('+'))
  expect(display).toHaveTextContent('1')
})

test('can render with redux with custom initial state', () => {
  const {getByText, getByLabelText} = render(<Counter />, {
    initialState: {count: 3},
  })
  const display = getByLabelText(/count/i)
  expect(display).toHaveTextContent('3')
  fireEvent.click(getByText('-'))
  expect(display).toHaveTextContent('2')
})
