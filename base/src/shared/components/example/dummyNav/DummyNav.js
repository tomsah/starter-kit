import React from 'react'
import {NavLink} from 'react-router-dom'

const DummyNav = () => (
  <div className="dummy-nav">
    <ul>
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/page2">page 2</NavLink>
      </li>
    </ul>
  </div>
)

export default DummyNav
