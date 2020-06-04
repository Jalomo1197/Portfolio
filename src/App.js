import React from 'react';
import logo from './logo.svg';
import name from './Name.gif'
import { motion } from "framer-motion"
import {useSpring, animated} from 'react-spring'
import './App.css';

function App() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <div className="App">
      <div className="navigation">
      <animated.div style={props}>
        <img src={name} className="logo" alt="Logo Image" />
        </animated.div>
        <div className="navigation-sub">
          <a href="" className="item">Projects</a>
          <a href="" className="item">Articles</a>
          <a href="" className="item">About</a>
        </div>
      </div>
    </div>
  );
}

export default App;
