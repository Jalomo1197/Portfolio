
// Icon pngs
import github from './Icons/icons8-github-100.png'
import linkin from './Icons/icons8-linkedin-100.png'
import facebook from './Icons/icons8-facebook-old-100.png'
import twitter from './Icons/icons8-twitter-squared-100.png'
import instagram from './Icons/icons8-instagram-100.png'

import React from 'react';
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components'

const IconsContainer = styled.div`
text-align: left;
text-center: center;
margin: 20px;
position: relative;
`

const Icon = styled.div`
  width: 9ch;
  height: 9ch;
  margin-right: 2ch;
  background: transparent;
  border-radius: ${props => props.radius};
  filter: drop-shadow(5px 5px 3px rgba(192,192,192, 0.5));
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.icon});
  transition: box-shadow 0.5s;
  will-change: transform;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(4px 4px 3px ${props => props.theme + "0.6)"});
  }

`
// ^ scrap idea of glow? box-shadow: 0 12px 16px 0 rgba(192,192,192,0.3), 0 17px 50px 0 rgba(192,192,192,0.1);


//function to calculate appropiate Transformation location
const GeneralCal = (x, y, xDevisor) => [-(y - window.innerHeight / 1.5) / 20, (x - window.innerWidth / xDevisor) / 20, 1.2] 
// Transformation on icons
const trans = (x, y, s) => `perspective(80px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
// Spring configuation of tranformation
const iconAnimationConfig = { mass: 5, tension: 350, friction: 40 }
// Normal state
const iconNormal = [0, 0, 1]



function SocialMedia(props){
    const Fade = useSpring({ friction: 100, tension: 5, delay: 1800, opacity: 1, from: {opacity: 0}});
    const Theme = props.themeColor; 

    // Different Springs for each icon, in order to separate
    const [git_Spring, set1] = useSpring(() => ({ xys: iconNormal, config: iconAnimationConfig }))
    const [link_Spring, set2] = useSpring(() => ({ xys: iconNormal, config: iconAnimationConfig }))
    const [insta_Spring, set3] = useSpring(() => ({ xys: iconNormal, config: iconAnimationConfig }))
    const [face_Spring, set4] = useSpring(() => ({ xys: iconNormal, config: iconAnimationConfig }))
    const [twitter_Spring, set5] = useSpring(() => ({ xys: iconNormal, config: iconAnimationConfig }))

    return (
    <animated.div style={Fade}>
        <IconsContainer>
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set1({ xys: GeneralCal(x, y, 5.5) })}
                onMouseLeave={() => set1({ xys: iconNormal })}
                style={{ transform: git_Spring.xys.interpolate(trans), width:'fit-content', display:'inline-block' }}
                >
                <a href="https://github.com/Jalomo1197" target='_blank' rel='nofollow noopener noreferrer' ><Icon theme={Theme} radius='100px' icon={github}/></a>
            </animated.div>

            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set2({ xys: GeneralCal(x, y, 4.9) })}
                onMouseLeave={() => set2({ xys: iconNormal })}
                style={{ transform: link_Spring.xys.interpolate(trans), width:'fit-content', display:'inline-block' }}
                >
                <a href="https://www.linkedin.com/in/alexisjalomo/" target='_blank' rel='nofollow noopener noreferrer'><Icon theme={Theme} radius='100px' icon={linkin} /></a>
            </animated.div>

            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set3({ xys: GeneralCal(x, y, 3.8) })}
                onMouseLeave={() => set3({ xys: iconNormal })}
                style={{ transform: insta_Spring.xys.interpolate(trans), width:'fit-content', display:'inline-block' }}
                >
                <a href="https://www.instagram.com/jalomo_1197/?hl=en" target='_blank' rel='nofollow noopener noreferrer'><Icon theme={Theme} radius='100px' icon={instagram} /></a>
            </animated.div>

            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set4({ xys: GeneralCal(x, y, 3) })}
                onMouseLeave={() => set4({ xys: iconNormal })}
                style={{ transform: face_Spring.xys.interpolate(trans), width:'fit-content', display:'inline-block' }}
                >
                <a href="https://www.facebook.com/alex.jalomo" target='_blank' rel='nofollow noopener noreferrer'><Icon theme={Theme} radius='100px' icon={facebook} /></a>
            </animated.div>

            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set5({ xys: GeneralCal(x, y, 2.3) })}
                onMouseLeave={() => set5({ xys: iconNormal })}
                style={{ transform: twitter_Spring.xys.interpolate(trans), width:'fit-content', display:'inline-block' }}
                >
                <a href="https://twitter.com/JalomoLeonardo" target='_blank' rel='nofollow noopener noreferrer'><Icon theme={Theme} radius='100px' icon={twitter} /></a>
            </animated.div>
        </IconsContainer>
    </animated.div>
    )
}

export default SocialMedia