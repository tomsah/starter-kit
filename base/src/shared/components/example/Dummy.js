import React, {useState, useEffect, lazy, Suspense} from 'react'
import imgExample from './../../assets/images/avatar.jpg'

// import async.js
// import('./async.js').then((data) => {
//   console.log(data)
// })

// TODO: manged to extract the style and apply it
const setButtonStyle = (color) =>
  import(
    /* webpackChunkName: "[request]"
     */ `./button-styles/${color}`
  ).then((style) => style.default)

// React way to for code splitting (not working for SSR)
const DummyCardAnim = lazy(() =>
  import(
    /* webpackChunkName: "DummyCardAnim" */ './dummyCardAnim/DummyCardAnim'
  ),
)

/*
   here we are code splitting DummyCardAnim, to illustrate React way to
   code split (this method is not working for SSR scenario)
   notice the way we import the component using lazy and dynamic import
   then you have to wrap the component Suspense.
   to see result see the webpack manifest/bundle in chrome inspector on the 1st
    load we are not importing any code for that component including the gsap
    library.
    the 1st time you click. you can see the network request for
    fetching the chunks for gsap and the component. after that does not
    matter we are requesting the component, webpack will serve the cache
    version until it changes.
 */

const Dummy = () => {
  const [showCard, setShowCard] = useState(false)
  const [buttonStyle, setStyle] = useState({})
  function handleClick() {
    return setShowCard(!showCard)
  }

  // TODO fix this example
  // it is not working, we dont get the style
  // it is not getting the style when 1st render
  async function fetchStyle() {
    const response = await setButtonStyle('red')
    setStyle(response)
  }

  useEffect(() => {
    fetchStyle().then((x) => x)
  }, [buttonStyle])

  return (
    <div className="dummy-box">
      <h1>I am the Dummy Component</h1>
      <img className="image-style" src={imgExample} alt="" />
      <button onClick={handleClick} style={{buttonStyle}}>
        show card
      </button>
      {showCard ? (
        <Suspense fallback={<div>Loading...</div>}>
          <DummyCardAnim />
        </Suspense>
      ) : null}
    </div>
  )
}

export default Dummy
