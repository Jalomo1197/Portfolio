import React from "react"
import styled from 'styled-components'
import ProOneImage from './ProjectsImages/Project_1.png'
import ProTwoImage from './ProjectsImages/Project_2.png'
import ProThreeImage from './ProjectsImages/Project_3.jpg'
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
const SubHeader = styled.h1`
  min-width: ${props => props.minWidth};
  min-height: 80px;
  display: inline-block;
  position: relative;
  font-family: Arial;
  padding-left: 5%;
  text-align: ${props => props.alignment};
  font-size: 33px;
  padding: auto;
  filter: brightness(120%);
  font-weight: 900;  
  width:100%;
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

const ProjectDisplay = styled.div`
  display: table;
  table-layout: fixed;
  margin: 42px;
  marginBottom: 60px;
  width: 80%;
  max-width: 2000px;
`
const ProjectElement = styled.div`
  display: table-cell;
  vertical-align: middle;
  
  margin: auto;
  width: 140px;
`


const ProjectImage = styled.div`
  display: block;
  width: 55ch;
  height: 27ch;
  margin-right: 2ch;
  background: transparent;
  border-radius: ${props => props.radius};
  filter: drop-shadow(2px 2px 5px rgba(192,192,192, 0.5));
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.icon});
  transition: box-shadow 1s;
  will-change: transform;
  cursor: pointer;

  @media only screen and (max-width: 40em) { 
    width: 4.5ch;
    height: 4.5ch;
    margin: 0.8ch;
    border-radius: 2ch;
   }

  &:hover {
    filter: drop-shadow(2px 2px 12px rgba(192,192,192, 0.5));
  }
`
const ProjectInfo = styled.div`
  display: block;
  background: ${props => props.backgroundColor};

  border-radius: 6px;
  
  color: white;


  line-height: 1.3; 
  font-family: Arial;
  font-weight: 100;
  z-index: 1;
  position: relative;
  padding: 17px;

  display: inline-block;
  font-size: 17px;
  margin: 0px;
 
  line-height: 1.6;
  text-align: left;
`

function Projects(props) {
  return (
    <div id="Projects" style={{marginTop: '99px', justifyContent: 'center', alignItems: 'center'}}> {/* didint do shit*/}
      <div style={{display:'flex',flexFlow: 'row wrap', justifyContent:'space-around', width:'100%'}}>
        <Header minWidth='300px'>MY PROJECTS</Header>
        <GlowBar/>
      </div>

      
      <ProjectDisplay>
        <ProjectElement>
          <a href="https://github.com/Jalomo1197/ClientGitHubGraphQL" target='_blank' rel='nofollow noopener noreferrer'>
            <ProjectImage radius='6px' icon={ProOneImage}/>
          </a>
        </ProjectElement>
        <ProjectElement>
          <SubHeader minWidth='300px' fromColor="#ffffff" toColor="#e75480" alignment="right">GitHub GraphQL Client Framework</SubHeader>
          <ProjectInfo backgroundColor="rgba(231, 84, 128, 0.5)"> 
            A object-oriented pure functional design and implementation of a GraphQL client framework for GitHub. 
            The framework composes and executes external GraphQL commands from Scala client programs. 
          </ProjectInfo>
        </ProjectElement>
      </ProjectDisplay>

      <ProjectDisplay>
        <ProjectElement>
            <SubHeader minWidth='300px' fromColor="#ffffff" toColor="#4dd2ff" alignment="left">Flow LEDs</SubHeader>
            <ProjectInfo backgroundColor="rgba(	77, 210, 255, 0.5)"> 
            Designed and implemented an algorithm that synchronizes the lights of programmable LED strips to the 
            bass vibration of songs. 
            </ProjectInfo>
          </ProjectElement>
        <ProjectElement>
          <a href="https://github.com/Jalomo1197/LED_Flow" target='_blank' rel='nofollow noopener noreferrer'>
            <ProjectImage radius='6px' icon={ProTwoImage} style={{left: '150px'}}/>
          </a>
        </ProjectElement>
      </ProjectDisplay>


      <ProjectDisplay>
        <ProjectElement>
          <a href="https://github.com/Jalomo1197/Design-Pattern-Code-Generator" target='_blank' rel='nofollow noopener noreferrer'>
            <ProjectImage radius='6px' icon={ProThreeImage}/>
          </a>
        </ProjectElement>
        <ProjectElement>
          <SubHeader minWidth='300px' fromColor="#ffffff" toColor="#9370db" alignment="right">Design Pattern Generator</SubHeader>
          <ProjectInfo backgroundColor="rgba(147, 112, 219, 0.5)"> 
          IntelliJ plugin program that generates the implementation code of supported design patterns, which is 
          inserted into the user’s project.
          </ProjectInfo>
        </ProjectElement>
      </ProjectDisplay>
    
    </div>
  )
}
 
export default Projects;