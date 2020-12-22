import styled from 'styled-components'

const ProjectContent = styled.div`
    grid-column: ${props => props.colStart} / ${props => props.colEnd};
    text-align: ${props => props.textAlign};
    position: relative;
    
    display: block;
    color: white;
    font-family: Arial;
`

const ProjectTitle = styled.h3`
    line-height: 1.1;
    font-weight: 900;
    z-index: 3;
    font-size: 27px;
    margin-bottom: 15px;
    background: -webkit-linear-gradient(90deg, ${props => props.fromColor} , ${props => props.toColor} );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const ProjectDescription = styled.div`
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: 6px;
    background-color: ${props => props.BGcolor};
    color: var(--light-slate);
    font-size: var(--fz-lg);
`

const ProjectTechStack = styled.ul`
    -webkit-box-pack: end;
    justify-content: ${props => props.flexAlign};
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0px 10px;
    padding: 0px;
    list-style: none;
    text-align: ${props => props.textAlign};
`

const ProjectLinks = styled.div`
    -webkit-box-pack: end;
    justify-content: ${props => props.flexAlign};
    margin-left: 0px;
    margin-right: -10px;
    display: flex;

    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);
`

const ProjectImage = styled.div`
    grid-area: 1 / 6 / -1 / -1;

    grid-column: ${props => props.colStart} / ${props => props.colEnd};

    box-shadow: 0 10px 30px -15px white;
    
    position: relative;
    z-index: 1;
    transition: var(--transition);
`


const ProjectBox = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    -webkit-box-align: center;
    align-items: center;

    visibility: visible;
    opacity: 1;
    padding-left: 123px;
    padding-right: 123px;
    padding-top: 75px;
    padding-bottom: 75px;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
`

const techTool = styled.li`
    margin: 0px 0px 5px 20px;
    color: gray;
`

export {ProjectBox, ProjectTitle, ProjectTechStack, ProjectLinks, ProjectImage, ProjectDescription, ProjectContent, techTool}