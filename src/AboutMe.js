import React from 'react'
import styled from 'styled-components'
import './styles.css'
//import glowRJS from './styles.css'
import Tabs from './Tabs'


import Carousel from 'react-bootstrap/Carousel'

import Java from './Icons/Java.png'
import Scala from './Icons/Scala.png'
import Cpp from './Icons/Cpp.png'
import C from './Icons/C.png'
import JS from './Icons/JS.png'
import SQL from './Icons/SQL.png'
import MySQL from './Icons/MySQL.png'
import GraphQL from './Icons/GraphQL.png'
import Git from './Icons/Git.png'
import Node from './Icons/Node.png'
import ReactImg from './Icons/React.png'



//padding: 0.25em 1em;
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
  fromColor: "pink",
  toColor: "blue"
}


const GlowBar = styled.div`
  display: inline-block;
  position: relative;
  height: 10px;
  width: 66%;
  
  margin: auto;
  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.3);

  &:after{
    border-radius: 20px;
    margin: auto;
    position: absolute;
    content: '';
    top: 0;
    left: 6%;
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
  line-height: 1.3; 
  font-family: Arial;
  font-weight: 100;
  z-index: 1;
  position: relative;
  box-sizing: inherit;
  color: #fff;
  display: inline-block;
  font-size: 20px;
  margin: 0px;
  margin-top: 33px;
  line-height: 1.6;
  text-align: left;
`

const GlowText = styled.p`
  font-size: 22px;
  font-family: Arial;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 2s ease-in-out 1 alternate;
  -moz-animation: glow 2s ease-in-out 1 alternate;
  animation: glow 2s ease-in-out 1 alternate;

  @keyframes glow {
    0% {
      text-shadow: 0 0 0px #fff, 0 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6;
    }
    
    50% {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e60073, 0 0 20px #e60073, 0 0 25px #e60073, 0 0 30px #e60073, 0 0 35px #e60073;
    }
    
    100% {
      text-shadow: 0 0 0px #fff, 0 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6, 0 0 0px #ff4da6;
    }
  }
`

const HyperLink = styled.a`
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
  margin-right: 5px;
  &::after{
    content: "";
    display: block;
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

const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(2,minmax(140px,200px));
    overflow: hidden;
    padding: 0;
    margin: 20px 0 0;
    color: white;
`

const Li = styled.li`
    position: relative;
    margin-top: 33px;
    margin-bottom: 33px;
    padding-left: 45px;
    font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono","Lucida Console",Monaco,monospace;
    font-size: 22px;
    color: white;
    z-index: 1;
    list-style:none;

    -webkit-animation: ${props => props.glowAnimation} 2s ease-in-out 1 alternate;
    -moz-animation: ${props => props.glowAnimation} 2s ease-in-out 1 alternate;
    animation: ${props => props.glowAnimation} 2s ease-in-out 1 alternate;


    @keyframes "glowScala" {
      0% {
        text-shadow: 0 0 0px #ffb0e2;      
      }
      25% {
        text-shadow: 3px 3px 6px #ffb0e2;
      }     
      75% {
        text-shadow: 0 0 0px #ffb0e2;
      }
    }
  
    @keyframes "glowJava" {
      0% {
        text-shadow: 0 0 0px #f5edc4;      
      }
      25% {
        text-shadow: 3px 3px 6px #f5edc4;
      }     
      75% {
        text-shadow: 0 0 0px#f5edc4;
      }
    }
  
    @keyframes "glowCPP" {
      10% {
        text-shadow: 0 0 0px #add1ff;      
      }
      35% {
        text-shadow: 3px 3px 6px #add1ff;
      }     
      85% {
        text-shadow: 0 0 0px#add1ff;
      }
    }
  
  
    @keyframes "glowC" {
      10% {
        text-shadow: 0 0 0px #8084ff;      
      }
      35% {
        text-shadow: 3px 3px 6px #8084ff;
      }     
      85% {
        text-shadow: 0 0 0px#8084ff;
      }
    }
  
    @keyframes "glowJS" {
      20% {
        text-shadow: 0 0 0px yellow;      
      }
      45% {
        text-shadow: 3px 3px 6px yellow;
      }     
      95% {
        text-shadow: 0 0 0px yellow;
      }
    }
  
  
    @keyframes "glowSQLs" {
      20% {
        text-shadow: 0 0 0px #dbb5ff;      
      }
      45% {
        text-shadow: 3px 3px 6px #dbb5ff;
      }     
      95% {
        text-shadow: 0 0 0px #dbb5ff;
      }
    }
  
    @keyframes "glowGQL" {
      0% {
        text-shadow: 0 0 0px #ffa1fd;      
      }
      25% {
        text-shadow: 3px 3px 6px #ffa1fd;
      }     
      75% {
        text-shadow: 0 0 0px #ffa1fd;
      }
    }
  
    @keyframes "glowGIT" {
      0% {
        text-shadow: 0 0 0px #ffd699;      
      }
      25% {
        text-shadow: 3px 3px 6px #ffd699;
      }     
      75% {
        text-shadow: 0 0 0px #ffd699;
      }
    }
  
    @keyframes "glowNJS" {
      10% {
        text-shadow: 0 0 0px #96ff9c;      
      }
      35% {
        text-shadow: 3px 3px 6px #96ff9c;
      }     
      85% {
        text-shadow: 0 0 0px #96ff9c;
      }
    }
  
    @keyframes "glowRJS" {
      10% {
        text-shadow: 0 0 0px #ce96ff;      
      }
      35% {
        text-shadow: 3px 3px 6px #ce96ff;
      }     
      85% {
        text-shadow: 0 0 0px #ce96ff;
      }
    }

    &::before{
        z-index: 1;
        content: '';
        background-image: url(${props => props.icon});
        background-size: 30px 30px;
        width: 30px; 
        height: 30px;
        position: absolute;
        left: 0px;
        color: rgb(100, 255, 218);
        font-size: 14px;
        line-height: 12px;
    }
`



const AboutSection = styled.div`
  marginTop: 350;
  marginBottom: 350;
  textAlign: center;
`

const AboutText = styled.div`
  width: 42%;
  position: relative;
  textAlign: left;


  @media only screen and (max-width: 40em) { 
    width: 100vw; 
    textAlign: left;
  }
`

const AboutLayout = styled.div`
  width: 90%; 
  margin-bottom: 200px;
  textAlign: left; 
  paddingLeft: 9%; 
  paddingRight: 9%;
  display: flex;
  flexFlow: row wrap;
  justify-content: space-around;


  @media only screen and (max-width: 40em) { 
    width: 100%;
    paddingLeft: 0%; 
    paddingRight: 0%;
    textAlign: left; 
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
`

const TabsLayout = styled.div`
  max-width: 400px; 
  height: 400px;
  position: relative; 
  text-align: left;
  @media only screen and (max-width: 40em) { 
    marginTop: 21px;
    width: 100vw; 
    position: relative; 
    display: block;
  }
`

//, Helvetica, sans-serif old tabs font
// I am prepared to collaborate, develop, and deliver. 
function AboutMe(props) {
    return (
        <AboutSection id="About">
            <div style={{marginTop: '222px', display:'flex',flexFlow: 'row wrap',justifyContent:'space-around', width:'100%', height:'fit-content'}}>
                <Header fromColor="white" toColor="gray" minWidth='300px'>ABOUT ME</Header>
                <GlowBar fromColor="gray" toColor="black"/>
            </div>
            
            <AboutLayout>
                <AboutText>
                  <Text>
                    Hi! Glad you visited my website! My name is Alex, a software engineer based in Chicago, IL. I obtained my bachelors degree from the
                    <HyperLink href='https://cs.uic.edu/' target='_blank' rel='nofollow noopener noreferrer' style={{marginLeft: '5px'}}>
                    University of
                    </HyperLink>
                    <HyperLink href='https://cs.uic.edu/' target='_blank' rel='nofollow noopener noreferrer'>
                    Illinois  at
                    </HyperLink>
                    <HyperLink href='https://cs.uic.edu/' target='_blank' rel='nofollow noopener noreferrer'>
                    Chicago.
                    </HyperLink>
                    <br></br>
                    <br></br>
                    I enjoy every aspect of computer science, along with the continuous learning. I've developed websites, plugins, relational databases, 
                    frameworks, games, and errors.
                    <br></br>
                    <br></br>
                    I'm currently not looking for a new opportunities. However, feel free to reach out for any questions you may have. 
                  </Text> 
                </AboutText>

                <TabsLayout>
                    <Tabs>
                        <div label="Languages">
                            
                            <Ul>
                                <Li icon={Java} glowAnimation="glowJava"> Java </Li>
                                <Li icon={Scala} glowAnimation="glowScala">Scala </Li>
                                <Li icon={Cpp} glowAnimation="glowCPP"> C++ </Li>
                                <Li icon={C} glowAnimation="glowC"> C </Li>
                                <Li icon={JS} glowAnimation="glowJS"> JavaScript </Li>
                                <Li icon={SQL} glowAnimation="glowSQLs"> SQL </Li>
                            </Ul>
                         
                        </div>
                        <div label="Softwares & Tools">
                            
                            <Ul>
                                <Li icon={GraphQL} glowAnimation="glowGQL"> GraphQL </Li>
                                <Li icon={Git} glowAnimation="glowGIT"> Git </Li>
                                <Li icon={Node} glowAnimation="glowNJS"> NodeJS </Li>
                                <Li icon={ReactImg} glowAnimation="glowRJS"> ReactJS </Li>
                                <Li icon={MySQL} glowAnimation="glowSQLs"> MySQL </Li>
                            </Ul>
                         
                        </div>
                    </Tabs>
                </TabsLayout>
            </AboutLayout>
      </AboutSection>
    )
  }
   
  export default AboutMe;

/**
 * <div label="Interests & Hobbies">
                            <GlowText> 🎶 🎸 MUSIC 🎹 🎧 </GlowText>
                            <Text style={{height: '260px', width:'100%'}}>
                            Throughout the years, I learned to play the guitar, piano, and other instruments. Recently I am trying to learn the 
                            <HyperLink href="https://www.ableton.com/en/" target='_blank' rel='nofollow noopener noreferrer'>Ableton</HyperLink> software to produce 
                            and record songs. Plan to publish music on spotify in the following years #_DJ_ALEX_EDM
                            <br></br>
                            • I like taking and editing photos wit my Nikon DSL500.
                            <br></br>
                            • I like biking around and visiting new locations.
                            </Text>
                           
                        </div>  
 */