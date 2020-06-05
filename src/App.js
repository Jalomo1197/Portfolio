import React from 'react';
import logo from './logo.svg';
import name from './Name.gif'
import { motion } from "framer-motion"
import Typist from 'react-typist';
import {useSpring, animated} from 'react-spring'

// Styled-components lets you write actual CSS in your JavaScript
import styled, { css, ThemeProvider } from 'styled-components'

import './App.css';


const themes = ["palevioletred", "mediumseagreen", "violet", "slateblue", "deepskyblue", "paleturquoise", "silver", "navajowhite"]

const LiveTextStyle = {
  color: "white",
  font: "Lucida Console"
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  margin: 0 1em;
  font-size: 18px;
  padding: 0.25em 1em;
  cursor: pointer;

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
`


// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}


const Container = styled.div`
  text-align: center;
  text-center: center;
  background: black;
  height: 50px;
`


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function App() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  //const props2 = useSpring({ value: 100, from: { value: 0 } })
  
  // Defining a theme for Styled components, Random every request.
  const theme = {
    main: themes[getRandomInt(themes.length)]
  }

  return (
    <div className="App" style= {{backgroundColor: "gray", color: "black"}}>
      <animated.div style={props}>
        <ThemeProvider theme={theme}>
          <Container>
            <Typist style={LiveTextStyle}  avgTypingDelay="70" >
              <Typist.Delay ms={500} />
              Welcome :)
            </Typist>
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
