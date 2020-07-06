import React, {Component, Suspense, lazy} from 'react'
import {Route, Switch} from 'react-router-dom'
// import Dummy from './shared/components/example/Dummy'

import DummyNav from './shared/components/example/dummyNav/DummyNav'
import NotFound from './shared/components/notFound/NotFound'

const DummyFooter = lazy(() =>
  import(
    /* webpackChunkName: "footer" */ './shared/components/example/dummyFooter/DummyFooter'
  ),
)

// Pages
const Dummy = lazy(() =>
  import(/* webpackChunkName: "Dummy" */ './shared/components/example/Dummy'),
)

const DummyPageTwo = lazy(() =>
  import(
    /* webpackChunkName: "DummyPageTwo" */ './shared/components/example/dummyPage2/DummyPageTwo'
  ),
)

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <h1>This is the App</h1>
          <DummyNav />
          <Switch>
            <Route exact path="/" component={Dummy} />
            <Route path="/page2" component={DummyPageTwo} />
            <Route render={() => <NotFound />} />
          </Switch>
          <DummyFooter />
        </div>
      </Suspense>
    )
  }
}

export default App
