import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Row,
  Col 
} from 'reactstrap';

import image from '../../assets/images/pictureOfMeCropped.jpg';
import './style.css';

const BioCard = () => {
  return (
    <>
      <Container>
        <Card className="mx-auto">
          <Row>
            <Col md="2">
              <CardImg className="image m-2" top width="100%" src={image} alt="Image of Gabe looking hireable" />
            </Col>
            <Col md="10">
              <CardBody>
                <CardTitle className="text-success font-weight-bold">
                  <h1 className='red-text'>Gabriel Pettus</h1>
                </CardTitle>
                <CardSubtitle className="text-monspace">Developer, recovering Systems Engineer</CardSubtitle>
                <CardText className="mt-3"> Experienced Systems Engineer with a Bachelor’s degree in physics and mathematics and have completed a Full-Stack Development Bootcamp at the University of Denver. Skilled in (HTML, CSS, JavaScript, Node, React, Perl, Shell scripting, SQL, NoSQL) and extensive “soft” skills (communication, teamwork, adaptability, problem-solving, leadership). I have experience with every aspect of the software lifecycle and have worked on teams that utilize Agile, Kanban, Waterfall, and hybrid methodologies.  I have made significant design and technical contributions leading to multi-million dollar contracts. I have repeatedly been recognized by my peers and management for outstanding performance. I am currently seeking a diverse professional home in which to collaborate on elegantly-designed technologies that will enrich the lives of others. </CardText>
                <Link to="/portfolio" className="btn m-2 btn-success">View Portfolio</Link>
                <Link to="/resume" className="btn m-2 btn-success">View Resume</Link>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default BioCard;