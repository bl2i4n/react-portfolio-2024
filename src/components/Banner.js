import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/ninja.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const Banner = () => {
    // animation needs useState and useEffect, for typing and deleting animation

    // indicate index we're at in the word we're displaying
    const [loopNum, setLoopNum] = useState(0);
    // true or false if the word being typed out or being deleted
    // initially set to false since we are typing out the word
    const[isDeleting, setIsDeleting] = useState(false);
    // list of words we'll be displaying and rotating
    const toRotate = ["Support Engineer", "Enterprise Technician", "Junior Web Developer"];
    // component needs to know what text we are showing right now
    // also showing only portion of the word
    const [text, setText] = useState('');
    // how much time passed for each letter being typed out
    const period = 2000;
    // how fast one letter comes out after the first one
    const [delta, setDelta] = useState(300- Math.random() * 100);

    // function for typing and deleting animation
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        // once we set interval and component unmounts we need to clear it
        return () => {clearInterval(ticker)};
        // useEffect will run every time text changes
    }, [text])
    
    // define the tick function
    const tick = () => {
        // loopNum is constantly increasing
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        // are we deleting or adding text
        let updatedText = isDeleting? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        // update state to updated text
        setText(updatedText);

        // pace is different when deleting
        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        // check if we finished typing out the word
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        // completely delete the word
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    return (
        <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                            {/* this is how we wrap our component to use the isVisible variable */}
                            {({ isVisible }) => 
                            <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi! I'm Brian, `}<span className="wrap">{text}</span></h1>
                                {/* About section */}
                                <p>Cillum incididunt laboris exercitation quis proident pariatur commodo labore occaecat nostrud reprehenderit id. Dolor do nulla non enim ipsum labore. Veniam eu consectetur deserunt reprehenderit aute.</p>
                                <Router>
                                    <HashLink to='#contact' style={{ textDecoration: 'none' }}>
                                        <button to='#contact'>Let's connect<ArrowRightCircle size={25}/></button>
                                    </HashLink>
                                </Router>
                            </div>}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />

                        </Col>
                    </Row>
                </Container>
        </section>
    )
}