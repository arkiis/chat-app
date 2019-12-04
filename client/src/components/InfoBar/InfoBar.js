import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import closeIcon from "../../icons/closeIcon.png";
import onlineIcon from "../../icons/onlineIcon.png";

const InfoBar = ({ room }) => (
  <Container className="bg-primary text-white">
    <Row>
      <Col>
        <Image src={onlineIcon} alt="online image" />
        <h3>{room}</h3>
      </Col>
      <Col>
        <a href="/">
          <Image src={closeIcon} alt="close image" />
        </a>
      </Col>
    </Row>
  </Container>
);

export default InfoBar;
