import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Message = ({message: {user, text}, name}) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName){
      isSentByCurrentUser = true;
  }

  return (
      isSentByCurrentUser
      ? (
          <Container>
          <Row>
          <Col>
              <p className="lead">{trimmedName}</p>
              <p>{text}</p>
</Col>
              </Row>
          </Container>
      )
      : (
          // here
      )
  )
}

export default Message
