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
              {data.map((item) =>
                {
                  return (
                    <ListGroupItem key={item}>
                      <p>
                        {item.type}
                        <br/>
                        <a href={item.link}> {item.cred} </a>
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