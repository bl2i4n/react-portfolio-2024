// use state is a hook in react
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
                                            //useState hook
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
                        // category here is one of the form keys and value is the value that the user enters
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        };
    
        fetch('http://localhost:3001/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.code === 200) {
              setStatus({
                success: true,
                message: 'Message sent successfully',
              });
            } else {
              setStatus({
                success: false,
                message: 'Message failed to send',
              });
            }
          })
          .catch((error) => {
            setStatus({
              success: false,
              message: 'An error occurred: ' + error.message,
            });
          });
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                                <Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}