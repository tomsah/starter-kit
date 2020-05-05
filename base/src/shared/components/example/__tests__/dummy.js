import React from 'react'
import {render} from '@testing-library/react'
import Dummy from '../Dummy'

describe('dummy component', () => {
  it('should render dummy component', () => {
    const comp = render(<Dummy />)
    expect(comp).toBeTruthy()
  })
})
