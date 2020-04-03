import React, { useState } from 'react';
import { 
  Card,
  CardTitle,
  CardText,
  Button,
  CardImg,
  Container,
  Row,
  Col,
  CardSubtitle,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import myPic from '../../assets/images/pictureOfMeCropped.jpg';
import axios from 'axios';

const Contact = () => {
  const [serverState, setServerState] = useState ({
    submitting: false,
    status: null
  });

  const handleServerResponse = ( ok, msg, form) => {
    setServerState({
      submitting: false,
      status: {ok, msg}
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://formspree.io/mknvwqvr',
      data: new FormData(form)
    })
    .then ( r => {
      handleServerResponse(true, 'Thanks! Look forward to talking with you.',form);
    })
    .catch( r => {
      handleServerResponse(false, r.response.data.error, form);
    });
  };
  
  return (
    <Container>
      <h1>Contact Gabe</h1>
      <Card>
        <Row>
          <Col md='4'>
            <CardImg src={myPic}></CardImg>
          </Col>
          <Col md='6'>
            <form onSubmit={handleOnSubmit}>
              <CardTitle className='mt-5 ml-5'>
                <h3>Gabe Pettus</h3>
              </CardTitle>
              <CardSubtitle className='text-monospace ml-5'>
                Junior Software Engineer
              </CardSubtitle>
              <CardText className='ml-5'>
                Please contact me with and questions
              </CardText>
              <FormGroup className='mx-5'>
                <Label htmlFor='email'>
                  Email:
                </Label>
                <Input id='email' type='email' name='email' required />
              </FormGroup>
              <FormGroup className='mx-5'>
                <Label htmlFor='message'>
                  Message:
                </Label>
                <Input type='textarea' id='message' name='message' />
              </FormGroup>
              <FormGroup className='ml-5'>
                <Button className='btn btn-lg m-2' type='submit' disabled={serverState.submitting}>
                  Send Message
                </Button>
                {serverState.status && (
                  <p className={!serverState.status.ok ? 'errorMsg' :''} >
                    {serverState.status.msg}
                  </p>
                )}
              </FormGroup> 
            </form>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Contact