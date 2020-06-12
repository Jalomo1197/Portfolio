import React from 'react';
import Name from './NameAnimation'
import SocialMedia from './SocialMedia'
import NavBar from './NavBar.js'
import Typist from 'react-typist';
import resume from './Jalomo_Resume.pdf'
import './type.scss'
import {useSpring, animated} from 'react-spring'

// Styled-components lets you write actual CSS in your JavaScript
import styled, { ThemeProvider } from 'styled-components'
import './App.css'; //background-color: #000015;

// Colors for text and theme
const themes = ["palevioletred", "mediumseagreen", "violet", "slateblue", "deepskyblue", "paleturquoise", "silver", "navajowhite"]


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function App() {
  const props = useSpring({ friction: 100, tension: 5, delay: 1800, opacity: 1, from: {opacity: 0}})


  // Defining a theme for Styled components, Random every request.
  const theme = {
    main: themes[getRandomInt(themes.length)]
  }


  return (
    <div className="App">
        <Name themeColor={theme.main}/>
        <NavBar themeColor={theme.main}/> 
        <SocialMedia/>
        <ThemeProvider theme={theme}>
          <animated.div style={props}>
            <div id="About" className="section" style={{marginTop: 500, color: theme.main}}>
              <h2> About Me </h2>
              <div className="section-sub">
                <p> Coming soon... </p>
              </div>
            </div>
            <div id="Projects" className="section" style={{color: theme.main}}>
              <h2> My Projects </h2>
              <div className="section-sub">
                <p> Coming soon... </p>
              </div>
            </div>
            <div id="Contact" className="section" style={{color: theme.main}}>
              <h2> Contact </h2>
              <div className="section-sub">
                <p> Coming soon... </p>                  
              </div>
            </div>
          </animated.div> 
      </ThemeProvider>  
    </div>
  );
}

export default App;
