import React from 'react';
//import logo from './logo.svg';
//import name from './Name.gif'
//import { motion } from "framer-motion"
import Typist from 'react-typist';
import './type.scss'
import {useSpring, animated} from 'react-spring'

// Styled-components lets you write actual CSS in your JavaScript
import styled, { ThemeProvider } from 'styled-components'

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
  height: 60px;
`


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


/*
<div className="TypistExample">
        <Typist
          className="TypistExample-header"
          avgTypingDelay={40}
          startDelay={2000}
          onTypingDone={this.onHeaderTyped}
        >
          <p>React Typist</p>
        </Typist>
      </div>

      <-- <span className="Cursor Cursor--blinking">|</span> !-->




      <div className="TypistExample">
              <Typist className="TypistExample-header"
                      avgTypingDelay={40}
                      startDelay={2000}
                      onTypingDone={this.onHeaderTyped} 
              >
                  <p style={{color: theme.main, font:'Lucida Console', width:'3px'}}> 
                    Welcome :)
                  </p>
                  <element class="Cursor--blinking">|</element>
              </Typist>
          </div>
*/

function App() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  //const props2 = useSpring({ value: 100, from: { value: 0 } })
  
  // Defining a theme for Styled components, Random every request.
  const theme = {
    main: themes[getRandomInt(themes.length)]
  }


  return (
    <div className="App">
      <animated.div style={props}>
        <ThemeProvider theme={theme}>
          <Container>
            <img src="./Ball.gif" alt="ball"/>
            <Button href=""> Projects </Button>
            <img src="./Ball.gif" alt="ball"/>
            <Button href=""> Articles </Button>
            <img src="./Ball.gif" alt="ball"/>
            <Button href=""> About </Button>
            <img src="./Ball.gif" alt="ball"/>
            <Button href=""> Contact </Button>
            <img src="./Ball.gif" alt="ball"/>
          </Container>
        
        </ThemeProvider>
      </animated.div>



      <div>
              <Typist
                      cursor={{color:theme.main }}
                      avgTypingDelay={40}
                      startDelay={2000}
              >
                  <h1 style={{color: theme.main, font:'Lucida Console', width:'1000px', display:'inline'}}> 
                    <br></br>
                    
                    Alexis Leonardo Jalomo
                    <br></br>
                    Welcome to my portfolio :)
                  </h1>
                  
    
                 
              </Typist>
      </div>

    </div>
  );
}

export default App;
