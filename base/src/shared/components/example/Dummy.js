import React from 'react'
import imgExample from './../../assets/images/avatar.jpg'

const Dummy = () => (
  <div className="dummy-box">
    <h1>I am the Dummy Component</h1>
    <img className="image-style" src={imgExample} alt="" />
  </div>
)

export default Dummy
