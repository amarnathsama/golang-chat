import React, { Component, useEffect } from "react";
import "./ChatHistory.scss";
import Message from "../Message/Message";

const ChatHistory = (props) => {
  useEffect(() => {
    console.log(props.ChatHistory);
  });
  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      <div>
        {props.ChatHistory.map((msg) => (
          <Message key={msg.timeStamp} message={msg.data} />
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
