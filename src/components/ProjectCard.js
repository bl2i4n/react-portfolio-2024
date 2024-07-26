import { Col } from 'react-bootstrap';

export const ProjectCard = ({title, description, imgUrl, link}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br />
                    <a href={link} style={{ color: 'white' }}>{link}</a>
                </div>
            </div>
        </Col>
    )
}