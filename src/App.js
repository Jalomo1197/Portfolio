import React from 'react';
import logo from './logo.svg';
import name from './Name.gif'
import { motion } from "framer-motion"
import {useSpring, animated} from 'react-spring'
import './App.css';

function App() {
  const props = useSpring({opacity: 0.5, from: {opacity: 0}})
  const props2 = useSpring({ value: 100, from: { value: 0 } })
  const AnimatedDonut = animated(<img src={name} className="logo" alt="Logo Image" />)


  return (
    <div className="App">
      <div className="navigation">
      
        <img src={name} className="logo" alt="Logo Image" />
      
        <AnimatedDonut percent={props.value} />
        <div className="navigation-sub">
          <a href="" className="item">Projects</a>
          <a href="" className="item">Articles</a>
          <a href="" className="item">About</a>
        </div>
      </div>
      <animated.div style={props}> I will FADE </animated.div>
    </div>
  );
}

export default App;
