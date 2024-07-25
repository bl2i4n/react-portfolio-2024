import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import madelogo from "../assets/img/made-logo.png";
import covidQuiz from "../assets/img/covid-quiz.png";
import kings from "../assets/img/kings.png";

export const Projects = () => {
    
    
    const projects = [
            {
                title: "Project 1",
                description: "This is a project that I worked on. It was a lot of fun and I learned a lot.",
                imgUrl: madelogo
                // link: "https://www.google.com"
            },
            {
                title: "Project 2",
                description: "This is a project that I worked on. It was a lot of fun and I learned a lot.",
                imgUrl: covidQuiz
                // link: "https://www.google.com"
            },
            {
                title: "Project 3",
                description: "This is a project that I worked on. It was a lot of fun and I learned a lot.",
                imgUrl: kings
                // link: "https://www.google.com"
            },
            {
                title: "Project 4",
                description: "This is a project that I worked on. It was a lot of fun and I learned a lot.",
                imgUrl: projImg1
                // link: "https://www.google.com"
            },
            {
                title: "Project 5",
                description: "This is a project that I worked on. It was a lot of fun and I learned a lot.",
                imgUrl: projImg2
                // link: "https://www.google.com"
            },
            {
                title: "Project 6",
                description: "This is a project that I worked on. It was a lot of fun and I learned a lot.",
                imgUrl: projImg3
                // link: "https://www.google.com"
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
                                <p>Here, you'll find a collection of my work across multiple domains, including web development, game design, and also personal passion projects. Each project show my ability to combine technical skills with creativity and problem-solving.</p>
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
                            <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />  
        </section>
    )
}