import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    
    
    const projects = [
            {
                title: "Project 1",
                description: "This is a project that I worked on. It was a lot of fun and I learned a lot.",
                imgUrl: projImg1
                // link: "https://www.google.com"
            },
            {
                title: "Project 2",
                description: "This is a project that I worked on. It was a lot of fun and I learned a lot.",
                imgUrl: projImg2
                // link: "https://www.google.com"
            },
            {
                title: "Project 3",
                description: "This is a project that I worked on. It was a lot of fun and I learned a lot.",
                imgUrl: projImg3
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
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {/* this is how we wrap our component to use the isVisible variable */}
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <h2>Projects</h2>
                                <p>Commodo amet ipsum exercitation Lorem adipisicing non. Incididunt qui adipisicing quis pariatur minim. Incididunt laboris veniam laborum aliquip qui qui eu quis ad culpa elit anim. Ad incididunt mollit dolore ut id non labore.</p>
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