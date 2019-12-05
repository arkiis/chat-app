import React from "react";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      value={message}
      placeholder="type a message..."
      onChange={({ target: { value } }) => {
        setMessage(value);
      }}
      onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
    />
    <button className="sendButton" onClick={event => sendMessage(event)}>
      Send
    </button>
  </form>
);

export default Input;
