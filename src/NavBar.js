import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import resume from './Jalomo_Resume.pdf'
import initals from './Icons/AJ.png'
import './styles.css'
import {useSpring, animated} from  'react-spring'

const NavBar = styled.div`
   
    text-center: center;
    padding:30px; 
    background: linear-gradient(to bottom, rgb(11, 11, 41), rgba(11, 11, 41,.0));
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
`

const Buttons = styled.div`
    text-align:right;
    display: inline-block;
    width: $(props => props.windowW);
`



const Initals = styled.div`
    text-align: left;
    display: inline-block;
    width: $(props => props.windowW);
`
Initals.defaultProps = {
    windowW: window.innerWidth/2 
}

Buttons.defaultProps = {
    windowW: window.innerWidth/2 
}

const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    margin: 0 1em;
    font-size: 18px;
    padding: 0.25em 1em;
    cursor: pointer;
    filter: brightness(120%);
    transition: 0.5s all ease-out;

    /* Color the border and text with theme.main */
    color: ${props => props.theme.main};
    border: 2px solid ${props => props.theme.main};

    /* On hover */
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
        main: "white"
    }
}


function NavigationBar(props){
    const Fade = useSpring({ friction: 100, tension: 5, delay: 1800, opacity: 1, from: {opacity: 0}});
    
    return (
        <animated.div style={Fade}>
            <ThemeProvider theme={{main: props.themeColor}}>
                <NavBar>
                    <Initals>
                        <img src={initals} alt="initals" width="70" height="70"/>
                    </Initals>
                    <Buttons>
                        <a className="nav-item" href="#About">
                        <Button> About </Button>
                        </a>
                        <a className="nav-item" href="#Projects">
                        <Button> Projects </Button>
                        </a>
                        <a href={resume} target='_blank' rel='nofollow noopener noreferrer' >
                        <Button> Resume </Button>
                        </a>
                        <a className="nav-item" href="mailto:alexisjalomo1197@gmail.com?subject=Top Secret Sauce&body=Cool website!" rel="nofollow noopener noreferrer">
                        <Button> Contact </Button>
                        </a>
                    </Buttons>
                </NavBar>
            </ThemeProvider>
        </animated.div>
    )

}

export default NavigationBar;