import React, { useState } from "react";
import { useEffect } from "react";
import "./ChatInput.scss";

const ChatInput = (props) => {
  const [messageData, setMessageData] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const message = {
      type: 1,
      body: messageData,
      poolID: props.poolID,
    };
    console.log(message);
    props.send(message);
    setMessageData("");
  };
  return (
    <div>
      <form className="ChatInput" onSubmit={handleSubmit}>
        <input
          value={messageData}
          onChange={(event) => setMessageData(event.target.value)}
          placeholder="type a message... Hit Enter to send"
        ></input>
      </form>
    </div>
  );
};

export default ChatInput;
