import React from 'react'
import PropTypes from 'prop-types'
import {reportError} from './api'

class ErrorBoundary extends React.Component {
  state = {hasError: false}
  componentDidCatch(error, info) {
    this.setState({hasError: true})
    reportError(error, info).then((x) => x)
  }
  tryAgain = () => this.setState({hasError: false})
  render() {
    return this.state.hasError ? (
      <div>
        <div role="alert">There was a problem.</div>{' '}
        <button onClick={this.tryAgain}>Try again?</button>
      </div>
    ) : (
      this.props.children
    )
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object,
}

export {ErrorBoundary}
