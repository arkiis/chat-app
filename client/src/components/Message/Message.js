import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ReactEmoji from "react-emoji";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <Container className="d-flex justify-content-start">
      <Row>
        <Col>
          <p className="lead">{trimmedName}</p>
          <Container className="bg-primary text-white">
            <p>{ReactEmoji.emojify(text)}</p>
          </Container>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container className="d-flex justify-content-end">
      <Row>
        <Col>
          <Container className="bg-secondary text-white">
            <p>{ReactEmoji.emojify(text)}</p>
          </Container>
        </Col>
      </Row>
      <p className="lead pl-3">{trimmedName}</p>
    </Container>
  );
};

export default Message;
