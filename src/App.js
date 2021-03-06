import React from 'react';
import Name from './NameAnimation'
import SocialMedia from './SocialMedia'
import ReactDOM from "react-dom";
import NavBar from './NavBar.js'
import NavBarTwo from './NavBarTwo.js'
import AboutMe from './AboutMe.js'
import Projects from './Projects.js'
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'
import './App.css' //background-color: #000015;
import './type.scss'
import './styles.css'

import FeaturedProjects from './FeaturedProjects.js'

// Colors for text and theme
const themes = ["rgba(0, 13, 255,","rgba(110, 53, 232,","rgba(211, 53, 232,","rgba(232, 53, 116,","rgba(0, 229, 255,","rgba(255, 255, 255,"]

const HomeGlow = styled.div`
  position: relative;
  padding: 30px;
  border-radius: 20px;
  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.3);  
  z-index: 0;
  color: white;
  background: black;
  

  &:after{
    @keyframes animateGlow {
      0%  {
				background-position: 0% 50%
			}
			50% {
				background-position: 100% 50%
			}
      100% {
				background-position: 0% 50%
			}
    }
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    height: 70%;
    width: 70%;
    margin: 0 auto;
    filter: blur(40px);
		transform: scale(1.3);
    background: linear-gradient(90deg, rgb(8, 123, 255), black ,rgb(241, 117, 255));
    background-size: 200% 200%;
    animation: animateGlow 18s ease infinite;
  }
`
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function App() {
  const props = useSpring({ friction: 100, tension: 5, delay: 1800, opacity: 1, from: {opacity: 0}})

  // Defining a theme for Styled components, Random every request.
  const theme = {
    main: themes[getRandomInt(themes.length)]
  }

  //<NavBar themeColor={theme.main}/> 
// bg colors
/*
#2b354d  
#1d2c4f 



DIF POSSIBLE WINNERS

#051a33  RGB 5, 26, 51
*/
  return (
      <div className="App">
          <NavBarTwo/>
          
          <Name themeColor={theme.main}/> 
          <SocialMedia themeColor={theme.main} />
          <animated.div style={props}>
          <HomeGlow/>
          <AboutMe/>    
          <FeaturedProjects/>
          </animated.div> 
      </div>
  );
}
// <iframe src="https://open.spotify.com/embed/playlist/6fLrXQrZizNq1k78XsbcLR" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
export default App;
