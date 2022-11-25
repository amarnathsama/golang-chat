import React, { useEffect } from "react";
import "./ChatHistory.scss";
import Message from "../Message/Message";

function ChatHistory(props) {
  return (
    <div className="ChatHistory">
      <h2>{`Channel ${props.poolID}`}</h2>
      <div>
        {props.ChatHistory.map((msg) => {
          if (msg.poolID != props.poolID) return <div />;
          return <Message key={msg.timeStamp} message={msg} />;
        })}
      </div>
    </div>
  );
}

export default ChatHistory;
