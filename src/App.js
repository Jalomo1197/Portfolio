import React from 'react';
import logo from './logo.svg';
import name from './Name.gif'
import { motion } from "framer-motion"
import {useSpring, animated} from 'react-spring'

// Styled-components lets you write actual CSS in your JavaScript
import styled, { css } from 'styled-components'

import './App.css';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

const Container = styled.div`
  text-align: center;
`



function App() {
  const props = useSpring({opacity: 0.5, from: {opacity: 0}})
  const props2 = useSpring({ value: 100, from: { value: 0 } })
  const AnimatedDonut = animated(<img src={name} className="logo" alt="Logo Image" />)


  return (
    <div className="App">
      <div className="navigation">
      
        <img src={name} className="logo" alt="Logo Image" />
    
        <div className="navigation-sub">
          <a href="" className="item">Projects</a>
          <a href="" className="item">Articles</a>
          <a href="" className="item">About</a>
        </div>
      </div>
      <animated.div style={props}> I will FADE </animated.div>
      <Container>
        <Button> Projects </Button>
        <Button> Articles </Button>
        <Button> About </Button>
        <Button primary> Contact </Button>
      </Container>
    </div>
  );
}

export default App;
