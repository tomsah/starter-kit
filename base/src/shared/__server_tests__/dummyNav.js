import React from 'react'
import ReactDOMServer from 'react-dom/server'
import DummyNav from '../components/example/dummyNav/DummyNav'

test('renders', () => {
  ReactDOMServer.renderToString(<DummyNav />)
})
