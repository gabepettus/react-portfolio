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
// import './style.css';

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
                  <h1>Gabriel Pettus</h1>
                </CardTitle>
                <CardSubtitle className="text-monspace">Developer, recovering Systems Engineer</CardSubtitle>
                <CardText className="mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nibh id velit tempor fringilla eget et ipsum. Sed suscipit, velit non accumsan blandit, felis dui sollicitudin risus, vitae aliquet felis sem quis enim. Quisque blandit arcu nec scelerisque scelerisque. Aenean vehicula rutrum justo commodo volutpat. Nullam vestibulum vel ipsum eget vulputate. Etiam vitae tellus est. Aliquam erat volutpat. Nulla a consequat felis. In hac habitasse platea dictumst. Integer quis gravida libero, quis eleifend nisl. Nunc eu porttitor eros. Cras scelerisque orci urna, a fringilla ligula laoreet sed.
                </CardText>
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