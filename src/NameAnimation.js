import React, { useState } from 'react'
import { useSpring, useTrail, animated } from 'react-spring'
import Typist from 'react-typist';
//import TvMan from './TvMan.gif'
import './type.scss'
import './styles.css'

const items = ['Alexis', 'Leonardo', 'Jalomo']
const config = { mass: 20, tension: 2000, friction: 200 }


function NameAnimation(props) {
  const [toggle, set] = useState(true)
  const theme = props.themeColor
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })


  return (
    <div className="trails-main" onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`)}}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
        <Typist avgTypingDelay={40} startDelay={3000} >
            <h1 style={{color: theme, fontWeight:500 , display:'inline', textShadow: '0px 1px 3px whitesmoke'}}> 
                Welcome to my portfolio
            </h1> 
        </Typist>
      </div>
    </div>
  )
}
//fontFamily:'"Courier New", Courier, monospace'

export default NameAnimation;