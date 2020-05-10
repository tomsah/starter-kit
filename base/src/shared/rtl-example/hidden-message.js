import React from 'react'
import PropTypes from 'prop-types'
import {CSSTransition} from 'react-transition-group'

function Fade(props) {
  return (
    <CSSTransition unmountOnExit timeout={1000} classNames="fade" {...props} />
  )
}

function HiddenMessage({children}) {
  const [show, setShow] = React.useState(false)
  const toggle = () => setShow((s) => !s)
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <Fade in={show}>
        <div>{children}</div>
      </Fade>
    </div>
  )
}

HiddenMessage.propTypes = {
  children: PropTypes.object,
}

export {HiddenMessage}
