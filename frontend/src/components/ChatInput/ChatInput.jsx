import React, { Component } from "react";
import "./ChatInput.scss";

const ChatInput = (props) => {
  return (
    <div>
      <div className="ChatInput">
        <input
          onKeyDown={props.send}
          placeholder="type a message... Hit Enter to send"
        ></input>
      </div>
    </div>
  );
};

export default ChatInput;
