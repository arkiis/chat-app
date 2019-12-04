import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

const Messages = ({ messages, name }) => (
  <ScrollToBottom>
    {messages.map((message, i) => (
      <div key={i}>
        <Messages messages={messages} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
