import React, { useState } from "react";
import "./ChatInput.scss";

const ChatInput = (props) => {
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.send(message);
    setMessage("");
  };
  return (
    <div>
      <form className="ChatInput" onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="type a message... Hit Enter to send"
        ></input>
      </form>
    </div>
  );
};

export default ChatInput;
