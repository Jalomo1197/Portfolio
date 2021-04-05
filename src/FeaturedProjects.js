import React from "react"
// Images
import ProOneImage from './ProjectsImages/Project_1.png'
import ProTwoImage from './ProjectsImages/Project_2.png'
import ProThreeImage from './ProjectsImages/Project_3.jpg'
import ChordImg from './ProjectsImages/Chord.png'
import CANimg from './ProjectsImages/CAN.png'
import HadoopImg from './ProjectsImages/Hadoop.jpg'
import CloudImg from './ProjectsImages/Cloud.jpg'

// Styled components
import {Header, GlowBar} from './StyledHeaders'
import {ProjectBox, ProjectTitle, ProjectTechStack, ProjectLinks, ProjectImage, ProjectDescription, ProjectContent, githubRepo} from './StyledProjects'


function FeaturedProjects(props) {
    return (
        <div id="Projects" style={{marginTop: '99px', marginBottom: '99px',justifyContent: 'center', alignItems: 'center'}}> {/* didint do shit*/}
        
            {/** FEATURED PROJECTS */}
            <div style={{display:'flex',flexFlow: 'row wrap', justifyContent:'space-around', width:'100%'}}>
                <Header minWidth='300px' fromColor="white" toColor="gray">FEATURED PROJECTS</Header>
                <GlowBar/>
            </div>


            <ProjectBox>
                <ProjectContent textAlign="right" colStart="5" colEnd="-1" >
                    <ProjectTitle fromColor="#ffffff" toColor="gray"> 
                    Content-Addressable Network
                    </ProjectTitle>
                    <ProjectDescription BGcolor="rgba(91, 87, 121, 0.7)" tectColor="black">
                        <p> Implementation of CAN Algorithm via Actor-based computational model. Designed for high-performing cloud-based applications. Functional ability to store and retrieve distributed information.</p>
                    </ProjectDescription>
                    <ProjectTechStack flexAlign="flex-end">
                        <li> Scala </li>
                        <li> Akka </li>
                    </ProjectTechStack>
                    <ProjectLinks flexAlign="flex-end"> 
                        {githubRepo({repoLink: "https://github.com/Jalomo1197/Content-Addressable_Network"})}
                    </ProjectLinks>
                </ProjectContent>
                <ProjectImage colStart="1" colEnd="7">
                    <img src={CANimg}
                    style={{position: "absolute", top: 0, left: 0, width: 72 + '%', borderRadius: "12px", filter: "drop-shadow(2px 2px 5px rgba(192,192,192, 0.5))"}} />
                </ProjectImage>
            </ProjectBox>


            {/** Distributed Chord */}
            <ProjectBox>
                <ProjectContent textAlign="left" colStart="1" colEnd="9" >
                    <ProjectTitle fromColor="#ffffff" toColor="#4dd2ff"> 
                        Distributed Chord
                    </ProjectTitle>
                    <ProjectDescription BGcolor="rgba(77, 210, 255, 0.5)">
                        <p> Implementation of Chord Algorithm via Actor-based computational model. Designed for high-performing
                            cloud-based applications. Functional ability to store and retrieve distributed information.</p>
                    </ProjectDescription>
                    <ProjectTechStack flexAlign="flex-start">
                        <li> Scala </li>
                        <li> Akka </li>
                    </ProjectTechStack>
                    <ProjectLinks flexAlign="flex-start"> 
                        {githubRepo({repoLink: "https://github.com/Jalomo1197/DistributedChordAlgorithmImplementation"})}
                    </ProjectLinks>
                </ProjectContent>
                <ProjectImage colStart="8" colEnd="-1">
                    <img src={ChordImg}
                    style={{position: "absolute", top: 0, left: 0, width: 72 + '%', borderRadius: "32px", filter: "drop-shadow(2px 2px 5px rgba(192,192,192, 0.5))"}} />
                </ProjectImage>
            </ProjectBox>

            
            {/** Big Movie Data Processing */}
            <ProjectBox>
                <ProjectContent textAlign="right" colStart="5" colEnd="-1" >
                    <ProjectTitle fromColor="#ffffff" toColor="#FECC39"> 
                    Big Movie Data Processing
                    </ProjectTitle>
                    <ProjectDescription BGcolor="rgba(254, 204, 57, 0.42)">
                        <p> Created a distributed program for parallel processing of the DBLP data-set (3GB) which contains XML
                            entries for various publications at many different venues. Implemented with the Map-Reduce model.</p>
                    </ProjectDescription>
                    <ProjectTechStack flexAlign="flex-end">
                        <li> Scala </li>
                        <li> Hadoop </li>
                    </ProjectTechStack>
                    <ProjectLinks flexAlign="flex-end"> 
                        {githubRepo({repoLink: "https://github.com/Jalomo1197/ScalaHadoop_PublicationsDataProcessing"})}
                    </ProjectLinks>
                </ProjectContent>
                <ProjectImage colStart="1" colEnd="7">
                    <img src={HadoopImg}
                    style={{position: "absolute", top: 0, left: 0, width: 90 + '%', borderRadius: "12px", filter: "drop-shadow(2px 2px 5px rgba(192,192,192, 0.5))"}} />
                </ProjectImage>
            </ProjectBox>



            {/** Cloud Simulations */}
            <ProjectBox>
                <ProjectContent textAlign="left" colStart="1" colEnd="9" >
                    <ProjectTitle fromColor="#ffffff" toColor="#FE6A39"> 
                        Cloud Simulations
                    </ProjectTitle>
                    <ProjectDescription BGcolor="rgba(254, 106, 57, 0.42)">
                        <p> Constructed and analyzed three cloud data center simulations. Each with distinct resource provisioning
                            models and indistinct cost for resources.</p>
                    </ProjectDescription>
                    <ProjectTechStack flexAlign="flex-start">
                        <li> Java </li>
                        <li> CloudSim Plus Framework </li>
                    </ProjectTechStack>
                    <ProjectLinks flexAlign="flex-start"> 
                        {githubRepo({repoLink: "https://github.com/Jalomo1197/CloudSimulations"})}
                    </ProjectLinks>
                </ProjectContent>
                <ProjectImage colStart="6" colEnd="-1">
                    <img src={CloudImg }
                    style={{position: "absolute", top: 0, left: 0, width: 100 + '%', borderRadius: "32px", filter: "drop-shadow(2px 2px 5px rgba(192,192,192, 0.5))"}} />
                </ProjectImage>
            </ProjectBox>


            {/** GitHub GraphQL Client Framework */}
            <ProjectBox>
                <ProjectContent textAlign="right" colStart="5" colEnd="-1" >
                    <ProjectTitle fromColor="#ffffff" toColor="#e75480"> 
                    GitHub GraphQL <br></br>Client Framework
                    </ProjectTitle>
                    <ProjectDescription BGcolor="rgba(231, 84, 128, 0.5)">
                        <p> A object-oriented pure functional design and implementation of a GraphQL client framework for GitHub. 
                            The framework composes and executes external GraphQL commands from Scala client programs.</p>
                    </ProjectDescription>
                    <ProjectTechStack flexAlign="flex-end">
                        <li> Scala </li>
                        <li> GitHub V4 API </li>
                    </ProjectTechStack>
                    <ProjectLinks flexAlign="flex-end"> 
                        {githubRepo({repoLink: "https://github.com/Jalomo1197/ClientGitHubGraphQL"})}
                    </ProjectLinks>
                </ProjectContent>
                <ProjectImage colStart="1" colEnd="7">
                    <img src={ProOneImage}
                    style={{position: "absolute", top: 0, left: 0, width: 100 + '%', borderRadius: "12px", filter: "drop-shadow(2px 2px 5px rgba(192,192,192, 0.5))"}} />
                </ProjectImage>
            </ProjectBox>

            {/** Flow LEDs */}
            <ProjectBox>
                <ProjectContent textAlign="left" colStart="1" colEnd="9" >
                    <ProjectTitle fromColor="#ffffff" toColor="#4dd2ff"> 
                        Flow LEDs 
                    </ProjectTitle>
                    <ProjectDescription BGcolor="rgba(77, 210, 255, 0.5)">
                        <p> Designed and implemented an algorithm that synchronizes the lights of programmable LED strips to the 
                            bass vibration of songs.</p>
                    </ProjectDescription>
                    <ProjectTechStack flexAlign="flex-start">
                        <li> C </li>
                        <li> Arduino </li>
                    </ProjectTechStack>
                    <ProjectLinks flexAlign="flex-start"> 
                        {githubRepo({repoLink: "https://github.com/Jalomo1197/LED_Flow"})}
                    </ProjectLinks>
                </ProjectContent>
                <ProjectImage colStart="6" colEnd="-1">
                    <img src={ProTwoImage}
                    style={{position: "absolute", top: 0, left: 0, width: 100 + '%', borderRadius: "32px", filter: "drop-shadow(2px 2px 5px rgba(192,192,192, 0.5))"}} />
                </ProjectImage>
            </ProjectBox>

            {/**Design Pattern Generator */}
            <ProjectBox>
                <ProjectContent textAlign="right" colStart="5" colEnd="-1" >
                    <ProjectTitle fromColor="#ffffff" toColor="#9370db"> 
                        Design Pattern Generator 
                    </ProjectTitle>
                    <ProjectDescription BGcolor="rgba(147, 112, 219, 0.5)">
                        <p> IntelliJ plugin program that generates the implementation code of
                            supported design patterns, which is inserted into the user’s project.</p>
                    </ProjectDescription>
                    <ProjectTechStack flexAlign="flex-end">
                        <li> Java </li>
                        <li> IntelliJ Platform </li>
                    </ProjectTechStack>
                    <ProjectLinks flexAlign="flex-end"> 
                        {githubRepo({repoLink: "https://github.com/Jalomo1197/Design-Pattern-Code-Generator"})}
                    </ProjectLinks>
                </ProjectContent>
                <ProjectImage colStart="1" colEnd="7">
                    <img src={ProThreeImage}
                    style={{position: "absolute", top: 0, left: 0, width: 100 + '%', borderRadius: "12px", filter: "drop-shadow(2px 2px 5px rgba(192,192,192, 0.5))"}} />
                </ProjectImage>
            </ProjectBox>
        </div>
    )
}

export default FeaturedProjects