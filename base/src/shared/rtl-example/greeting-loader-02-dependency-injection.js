import React from 'react'
import PropTypes from 'prop-types'
import * as api from './api'

const GreetingLoader2 = ({loadGreeting = api.loadGreeting}) => {
  const [greeting, setGreeting] = React.useState('')
  async function loadGreetingForInput(e) {
    e.preventDefault()
    const {data} = await loadGreeting(e.target.elements.name.value)
    setGreeting(data.greeting)
  }

  return (
    <form onSubmit={loadGreetingForInput}>
      <label htmlFor="name">Name</label>
      <input id="name" />
      <button type="submit">Load Greeting</button>
      <div aria-label="greeting">{greeting}</div>
    </form>
  )
}

GreetingLoader2.propTypes = {
  loadGreeting: PropTypes.string,
}

export {GreetingLoader2}
