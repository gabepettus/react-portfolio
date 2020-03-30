import React from 'react';
import { 
  Card,
  CardTitle,
  CardText,
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

// import './style.css';

const SkillCard = (props) => {
  return (
    <>
      <Row>
        <Col>
          <CardTitle>
            <h4>
              {props.data[0].category}
            </h4>
          </CardTitle>
          <ListGroup>
            <CardText>
              {props.data[0]
                .skills.map((item) =>
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
      </Row>
    </>
  );
}

export default SkillCard;