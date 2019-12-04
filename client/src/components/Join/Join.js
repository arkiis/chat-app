import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Container fluid={true} className="bg-dark text-white vh-100 align-middle">
      <Row className="justify-content-md-center mx-auto ">
        <Col md={{ span: 6 }}>
          <h1 className="">Join</h1>
          <div>
            <FormControl
              placeholder="Name"
              type="text"
              className="mb-4"
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div>
            <FormControl
              placeholder="Room"
              type="text"
              onChange={event => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={event => (!name || !room ? event.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <Button type="submit" className="mt-4">
              Sign In
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Join;
