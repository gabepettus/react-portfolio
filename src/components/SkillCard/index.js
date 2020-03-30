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

const SkillCard = (props) => {
  return (
    <Container>
      <Row>
        {props.data.map((group) =>
          {
            return (
              <Col>
                <CardTitle>
                  <h4>
                    {/* {props.data[0].category} */}
                    {group.category}
                  </h4>
                </CardTitle>
                <ListGroup>
                  <CardText>
                    {/* {props.data[0].skills.map((item) => */}
                    {group.skills.map((item) =>
                      {
                        return (
                          <ListGroupItem key={item}>
                            {item}
                          </ListGroupItem>
                        )
                      })}
                  </CardText>
                </ListGroup>
              </Col>
            )
          })}
      </Row>
    </Container>
  );
}

export default SkillCard;