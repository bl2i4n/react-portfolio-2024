import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Sint enim et dolor aliqua laborum non elit sunt sunt voluptate. Occaecat quis cillum esse magna amet ad qui pariatur id proident est occaecat tempor. Ut ea eiusmod mollit ad. Non ad elit aliqua commodo fugiat anim consectetur id. Sint esse exercitation amet velit.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Skill meter"/>
                                    <h5>API Troubleshooting</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Skill meter 2"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Skill meter 3"/>
                                    <h5>Integration Support</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Skill meter 4"/>
                                    <h5>IT System Administration</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )

}