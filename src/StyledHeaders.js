import styled from 'styled-components'

const Header = styled.h1`
  min-width: ${props => props.minWidth};
  min-height: 40px;
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

  @media only screen and (max-width: 40em) {
    
  }
`


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

export {Header, GlowBar}