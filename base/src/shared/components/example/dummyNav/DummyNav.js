import React from 'react'
import {Link} from 'react-router-dom'

const DummyNav = () => (
  <div className="dummy-nav">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default DummyNav
