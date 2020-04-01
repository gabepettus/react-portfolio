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

import data from '../../data/skillData.json';

const SkillCard = () => {
  return (
    <Container>
      <Row>
        {data.map((group) =>
          {
            return (
              <Col>
                <CardTitle>
                  <h4>
                    {group.category}
                  </h4>
                </CardTitle>
                <ListGroup>
                  <CardText>
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