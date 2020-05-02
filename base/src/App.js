import React, {Component, Suspense, lazy} from 'react'
import Dummy from './shared/components/example/Dummy'
import DummyNav from './shared/components/example/dummyNav/DummyNav'

const DummyFooter = lazy(() =>
  import(
    /* webpackChunkName: "footer" */
    './shared/components/example/dummyFooter/DummyFooter'
  ),
)

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is the App</h1>
        <DummyNav />
        <Dummy />
        <Suspense fallback={<div>Loading...</div>}>
          <DummyFooter />
        </Suspense>
      </div>
    )
  }
}

export default App
