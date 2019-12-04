import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Input = ({ message, setMessage, sendMessage }) => (
  <Form>
    <FormControl
      value={message}
      placeholder="type a message..."
      onChange={event => {
        setMessage(event.target.value);
      }}
      onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
    />
    <Button onClick={event => sendMessage(event)}>Send</Button>
  </Form>
);

export default Input;
