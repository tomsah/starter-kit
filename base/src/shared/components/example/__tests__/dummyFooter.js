import React from 'react'
import {render} from '@testing-library/react'
import DummyFooter from '../dummyFooter/DummyFooter'

describe('dummy footer component', () => {
  it('should render footer component', () => {
    const {container} = render(<DummyFooter />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="dummy-footer"
        >
          Footer
        </div>
      </div>
    `)
  })
})
