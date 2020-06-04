import React from 'react';
import logo from './logo.svg';
import name from './Name.gif'
import { motion } from "framer-motion"
import {useSpring, animated} from 'react-spring'

// Styled-components lets you write actual CSS in your JavaScript
import styled, { css, ThemeProvider } from 'styled-components'

import './App.css';


var themes = ["palevioletred", "mediumseagreen", "midnightblue", "slateblue", "deepskyblue"]

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  margin: 0 1em;
  padding: 0.25em 1em;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};

 /* ${props =>
    props.primary &&
    css`
      background: props.theme.main;
      color: white;
    `};*/
`


// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}


// Define what props.theme will look like
//const theme = {
//  main: "mediumseagreen"
//};


const Container = styled.div`
  text-align: center;
  background: black;
`


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const AnimatedButton = styled(Button)

function App() {
  const props = useSpring({opacity: 0.5, from: {opacity: 0}})
  //const props2 = useSpring({ value: 100, from: { value: 0 } })
  

  const theme = {
    main: themes[getRandomInt(themes.length)]
  }

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
      <ThemeProvider theme={theme}>
        <Container>
          <Button href=""> Projects </Button>
          <Button href=""> Articles </Button>
          <Button href=""> About </Button>
          <Button href=""> Contact </Button>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
