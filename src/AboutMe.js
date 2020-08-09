import React from 'react'
import styled from 'styled-components'
import './styles.css';
import Tabs from './Tabs';
import { Button } from 'react-scroll';

//padding: 0.25em 1em;
const Header = styled.h1`
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
    height: 100%;
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
  font-weight: 300;
  z-index: 1;
  position: relative;
  box-sizing: inherit;
  color: #fff;
  display: inline-block;
  font-size: 20px;
  margin: 0px;
  margin-top: 33px;
  line-height: 1.6;
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
  margin-left: 5px;
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
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono","Lucida Console",Monaco,monospace;
    font-size: 13px;
    color: white;
    z-index: 1;

    &::before{
        z-index: 1;
        content: url(${props => props.icon});
        position: absolute;
        left: 0px;
        color: rgb(100, 255, 218);
        font-size: 14px;
        line-height: 12px;
    }
`

//, Helvetica, sans-serif old tabs font

function AboutMe(props) {
    return (
        <div id="About" style={{marginTop: 150, marginBottom: 100,textAlign: 'center'}}>
            <div style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
                <Header fromColor="blue" toColor="purple">ABOUT ME</Header>
                <GlowBar fromColor="blue" toColor="purple"/>
            </div>
            
            <div style={{width: '90%', textAlign:'left', paddingLeft: '5%', paddingRight: '5%'}}>
                <div style={{width: '35%', position: 'relative', display: 'inline-block', textAlign: 'left'}}>
                <Text>
                    Hi! I'm Alex, a final year software engineering student at the 
                    <HyperLink href='https://cs.uic.edu/' target='_blank' rel='nofollow noopener noreferrer'>
                    University of Illinios at Chicago.
                    </HyperLink>
                    I am seeking an internship or fulltime position for Spring 2021. I love programming and 
                    the culture that comes with it. I have built websites, IntelliJ plugins, relational databases, 
                    frameworks, and games.
                </Text> 
                </div>

                <div style={{width: '35%', position: 'relative', display: 'block', textAlign: 'left'}}>
                    <Tabs>
                        <div style={{color: 'white'}} label="Languages & Tools">
                            
                            <Ul>
                                <Li icon='./Icons/Java.png'>Java </Li>
                                <Li icon='./Icons/Scala.png'>Scala </Li>
                                <Li icon='./Icons/Cpp.png'>C++ </Li>
                                <Li icon='./Icons/C.png'>C </Li>
                                <Li icon='./Icons/JS.png'>JavaScript </Li>
                                <Li icon='./Icons/SQL.png'>SQL </Li>
                                <Li icon='./Icons/MySQL.png'>MySQL </Li>
                                <Li icon='./Icons/GraphQL.png'>GraphQL </Li>
                                <Li icon='./Icons/Git.png'>Git </Li>
                                <Li icon='./Icons/Node.png'>NodeJS </Li>
                                <Li icon='./Icons/React.png'>ReactJS </Li>
                            </Ul>
                         
                        </div>
                        <div style={{color: 'white'}} label="Interests">
                            <Text>
                            • I like building presonal project with friends.
                            <br></br>
                            • I like concurrent programming and algorithms.
                            <br></br>
                            • I like learning new and improved tools for development. 
                            </Text>
                        </div>
                
                        <div style={{color: 'white'}} label="Hobbies">
                            <Text>
                            • I like contributing to project on github that seem interesting to me.
                            <br></br>
                            • I like taking and editing photos wit my Nikon DSL500.
                            <br></br>
                            • I like biking around and visiting new locations.
                            </Text>
                        </div>      
                    </Tabs>
                </div>
            </div>
      </div>
    )
  }
   
  export default AboutMe;

