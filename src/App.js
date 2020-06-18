import React from 'react';
import Name from './NameAnimation'
import SocialMedia from './SocialMedia'
import NavBar from './NavBar.js'
import Typist from 'react-typist';
import resume from './Jalomo_Resume.pdf'
import './type.scss'
import {useSpring, animated} from 'react-spring'
import Tabs from './Tabs';
// Styled-components lets you write actual CSS in your JavaScript
import styled, { ThemeProvider } from 'styled-components'
import './App.css'; //background-color: #000015;

// Colors for text and theme
const themes = ["rgba(0, 13, 255,","rgba(110, 53, 232,","rgba(211, 53, 232,","rgba(232, 53, 116,","rgba(0, 229, 255,","rgba(255, 255, 255,"]


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


const SubSection = styled.div`
  padding: 30px;
  background-color: ${props => props.theme.main + "0.12)"};
  border-radius: 20px;
  box-shadow: 10px 8px 30px 15px ${props => props.theme.main + "1)"};

`
const Text = styled.p`
  color: white;
`


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
        <SocialMedia themeColor={theme.main} />
        <ThemeProvider theme={theme}>
          <animated.div style={props}>
         
            <div id="About" className="section" style={{marginTop: 120, color: theme.main+ "1)"}}>
              <h2> About Me </h2>
              <SubSection>
                <Text>Coming soon...</Text>
                
                <Tabs>
                  <div label="Languages">
                    JAVA
                  </div>
                  <div label="Tools">
                    HAMMER
                  </div>  
                  
                  <div label="Hobbies">
                    BIKING
                  </div>
                  <div label="Interests">
                    INTERESTING THINGS
                  </div>
                </Tabs>
              </SubSection>
            </div>

            <div id="Projects" className="section" style={{color: theme.main + "1)"}}>
              <h2> My Projects </h2>
              <SubSection>
                <p> Coming soon... </p>
              </SubSection>
            </div>


            <div id="Contact" className="section" style={{color: theme.main+ "1)"}}>
              <h2> Contact </h2>
              <SubSection>
                <p> Coming soon... </p>                  
              </SubSection>
            </div>
          </animated.div> 
      </ThemeProvider>  
    </div>
  );
}

export default App;
