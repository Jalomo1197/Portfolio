import React from "react"
import styled from 'styled-components'
import './styles.css';

const Header = styled.h1`
  min-width: ${props => props.minWidth};
  min-height: 80px;
  display: inline-block;
  position: relative;
  font-family: Arial;
  padding-left: 5%;
  text-align: left;
  font-size: 45px;
  padding: auto;
  filter: brightness(120%);
  font-weight: 900;  
  border: 0px;
  background: -webkit-linear-gradient(90deg, ${props => props.fromColor} , ${props => props.toColor} );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`

Header.defaultProps = {
  fromColor: '#0fffc1',
  toColor: '#7e0fff'
}


const GlowBar = styled.div`
  display: inline-block;
  position: relative;
  height: 10px;
  width: 65%;
  margin: auto;
  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.3);

  &:after{
    border-radius: 20px;
    margin: auto;
    position: absolute;
    content: '';
    top: 0;
    left: 9%;
    right: 0;
    z-index: 0;
    height: 33%;
    width: 85%;
    margin: 0;
    filter: blur(0px);
	transform: scale(1.3);
    background: linear-gradient(90deg, ${props => props.fromColor} , ${props => props.toColor});
    /*background: linear-gradient(90deg, #0fffc1, #7e0fff);*/
    background-size: 200% 200%;
    animation: animateGlow 10s ease infinite;
    
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
  }
`

GlowBar.defaultProps = {
  fromColor: '#0fffc1',
  toColor: '#7e0fff'
}

const Text = styled.p`
  font-family: Arial;
  font-weight: 600;
  z-index: 1;
  position: relative;
  box-sizing: border-box;
  color: #fff;
  display: inline-block;
  font-size: 15px;
`
const HyperLink = styled.a`
  font-family: Arial;
  font-weight: 600;
  display: inline-block;
  text-decoration-skip-ink: auto;
  position: relative;
  cursor: pointer;
  color: rgb(241, 117, 255);
  text-decoration-line: none;
  text-decoration-style: initial;
  text-decoration-color: initial;
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0s;
  font-size: 15px;
  margin-left: 5px;

  &::after{
    content: "";
    display:block;
    width: 0px;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: rgb(241, 117, 255);
    opacity: 0.5;
    transition-property: all;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0s;
    
  }
`

function Projects(props) {
  return (
    <div id="Projects">
      <div style={{display:'flex',flexFlow: 'row wrap', justifyContent:'space-around', width:'100%'}}>
        <Header minWidth='300px'>MY PROJECTS</Header>
        <GlowBar/>
      </div>

      <Text>/* TODO: display via GITHUB API */</Text>
      
    </div>
  )
}
 
export default Projects;