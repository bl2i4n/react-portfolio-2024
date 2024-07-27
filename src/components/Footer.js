import { Col, Row, Container } from "react-bootstrap";
import githubIcon from '../assets/img/github-nav-icon.svg';
import linkedinIcon from '../assets/img/linkedin-nav-icon.svg';
import wordpressIcon from '../assets/img/wordpress-nav-icon.svg';


export const Footer = () => {


    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col className="align-right text-sm-end">
                        <div className="social-icon" id="social-icon-footer">
                            <a href="https://www.linkedin.com/in/briandelacruz408/"><img src={linkedinIcon} alt="linkedin" /></a>
                            <a href="https://github.com/bl2i4n"><img src={githubIcon} alt="github"/></a>
                            <a href="https://codehog.wordpress.com/"><img src={wordpressIcon} alt="blog"/></a>
                        </div>
                        <p>CopyRight 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}