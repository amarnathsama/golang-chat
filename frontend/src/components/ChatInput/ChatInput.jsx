import React, { useState } from "react";
import "./ChatInput.scss";

const ChatInput = (props) => {
  const [messageData, setMessageData] = useState("");
  const [channelID, setChannelID] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    setChannelID(1);
    const message = {
      type: 1,
      body: messageData,
      poolID: channelID,
    };
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
