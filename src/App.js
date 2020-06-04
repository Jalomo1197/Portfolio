import React from 'react';
import logo from './logo.svg';
import name from './Name.gif'
import { motion } from "framer-motion"
import {useSpring, animated} from 'react-spring'

// Styled-components lets you write actual CSS in your JavaScript
import styled, { css, ThemeProvider } from 'styled-components'

import './App.css';


var themes = ["palevioletred", "mediumseagreen", "violet", "slateblue", "deepskyblue", "paleturquoise", "silver", "navajowhite"]

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  margin: 0 1em;
  font-size: 18px;
  padding: 0.25em 1em;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};

  transition: 0.5s all ease-out;

  &:hover {
    background: solid;
    background-color: ${props => props.theme.main};
    border: 3px solid ${props => props.theme.main};
    color: white;
    box-shadow: 0 12px 16px 0 rgba(192,192,192,0.3), 0 17px 50px 0 rgba(192,192,192,0.1);
  }
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
  text-center: center;
  background: black;
  height: 45px;
`


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function App() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  //const props2 = useSpring({ value: 100, from: { value: 0 } })
  

  const theme = {
    main: themes[getRandomInt(themes.length)]
  }

  return (
    <div className="App">
      <animated.div style={props}>
        <ThemeProvider theme={theme}>
          <Container>
            <Button href=""> Projects </Button>
            <Button href=""> Articles </Button>
            <Button href=""> About </Button>
            <Button href=""> Contact </Button>
          </Container>
        </ThemeProvider>
      </animated.div>
    </div>
  );
}

export default App;
