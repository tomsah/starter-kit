import React, {useRef, useEffect} from 'react'
import {TweenMax} from 'gsap'

const DummyCardAnim = () => {
  const cardRef = useRef([])

  useEffect(() => {
    // console.log(cardRef)

    // testimonial animation
    TweenMax.staggerFrom(
      cardRef.current,
      1,
      {
        scale: 0,
      },
      0.3,
    )
  }, [])

  const cardArr = ['card 1', 'card 2', 'card 3']

  return (
    <div className="dummy-card-anim">
      <h1>I am the Dummy Component</h1>
      <div className="card-container">
        {cardArr.map((card, i) => (
          <div
            className="card"
            key={card}
            ref={(element) => {
              cardRef.current[i] = element
            }}>
            <h1>{card}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DummyCardAnim
