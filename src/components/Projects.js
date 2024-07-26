import { Container, Col, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import madelogo from "../assets/img/made-logo-resized.png";
import covidQuiz from "../assets/img/covid-quiz.png";
import kings from "../assets/img/kings-img-resized.png";
import githubcat from "../assets/img/githubcat.png"
import pacer from "../assets/img/pacer.png"
import threejs from "../assets/img/three-js-logo.jpg"

export const Projects = () => {
    
    
    const projects = [
            {
                title: "Museum of Art and Digital Entertainment",
                description: "Used React to add content to the Museum's website as a Web Developer",
                imgUrl: madelogo,
                link: "https://www.themade.org/"
            },
            {
                title: "King's Platformer",
                description: "This is a 2D platformer game built using Javascript and HTML Canvas ",
                imgUrl: kings,
                link: "https://github.com/bl2i4n/king-platformer-game"
            },
            {
                title: "Pacer+",
                description: "Worked as a developer on this legal application",
                imgUrl: pacer,
                link: "http://pacerautomatedsolutions.com/"
            },
            {
                title: "ThreeJS Tutorial",
                description: "Continously learning by working through Udemy's ThreeJS course",
                imgUrl: threejs,
                link: "https://github.com/bl2i4n/three.js-tutorial"
            },
            {
                title: "Do I Have It?",
                description: "Project I worked on during COVID to help people find out if they were symptomatic. Used Angular and typescript for this app.",
                imgUrl: covidQuiz,
                link: "https://github.com/bl2i4n/TestMe"
            },
            {
                title: "Chat Me Slack Clone",
                description: "This was a Slack clone application built using Firebase and Angular.",
                imgUrl: githubcat,
                link: "https://github.com/bl2i4n/Chatme"
            },
        ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {/* this is how we wrap our component to use the isVisible variable */}
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <h2>Projects</h2>
                                <p>Here, you'll find a collection of my work across multiple domains, including web development, game design, and also personal passion projects. Each project shows my ability to combine technical skills with creativity and problem-solving.</p>
                            </div>}
                        </TrackVisibility>
                       <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" alt="backdrop behind projects" src={colorSharp2} />  
        </section>
    )
}