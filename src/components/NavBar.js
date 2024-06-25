import { useState,useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import githubIcon from '../assets/img/github-nav-icon.svg';
import linkedinIcon from '../assets/img/linkedin-nav-icon.svg';
import wordpressIcon from '../assets/img/wordpress-nav-icon.svg';


// import { SocialIcon } from 'react-social-icons'



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        //fired on scroll and passed in function based on what happens when we scroll
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                                                                                                            {/* update state when links get pressed */}
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/briandelacruz408/"><img src={linkedinIcon} alt="linkedin" /></a>
                    <a href="https://github.com/bl2i4n"><img src={githubIcon} alt="wordpress blog" /></a>
                    <a href="https://codehog.wordpress.com/"><img src={wordpressIcon} alt="wordpress blog" /></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')} href="#"><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    )

}