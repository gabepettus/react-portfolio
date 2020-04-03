import React from 'react';
import { 
  Card,
  CardTitle,
  CardText,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Container
} from 'reactstrap';

import data from '../../data/credData.json';

const CredentialCard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CardTitle>
            <h4> Credentials </h4>
          </CardTitle>
          <ListGroup>
            <CardText>
              {data.map((credential, index) =>
                {
                  return (
                    <ListGroupItem key={index} value={credential}>
                      <p>
                        {credential.type}
                        <br/>
                        <a href={credential.link}> {credential.cred} </a>
                      </p>
                    </ListGroupItem>
                  )
                })}
            </CardText>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default CredentialCard;