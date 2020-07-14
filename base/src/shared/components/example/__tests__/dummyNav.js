import React from 'react'
import {render} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'

import DummyNav from '../dummyNav/DummyNav'

describe('dummy component', () => {
  it('should render dummy component', () => {
    const {getByText} = render(
      <BrowserRouter>
        <DummyNav />
      </BrowserRouter>,
    )
    getByText(/home/i)
    getByText('About')
  })
})
