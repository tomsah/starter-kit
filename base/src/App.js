import React, {Component} from 'react'
import Dummy from './shared/components/dummy/Dummy'
import './main.scss'

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is the App</h1>
        <Dummy />
      </div>
    )
  }
}

export default App
