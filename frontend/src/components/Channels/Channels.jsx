import React, { useState } from "react";
// import "./Channels.scss";
import Message from "../Message/Message";
import ChatHistory from "../ChatHistory/ChatHistory";
import ChatInput from "../ChatInput/ChatInput";

function Channels(props) {
  const [currentPool, setCurrentPool] = useState(1);
  return (
    <div className="Channels">
      <span>
        <h2>Channels</h2>
        <button onClick={() => setCurrentPool(1)}>channel 1</button>
        <button onClick={() => setCurrentPool(2)}>channel 2</button>
      </span>
      <ChatHistory ChatHistory={props.ChatHistory} poolID={currentPool} />
      <ChatInput poolID={currentPool} send={props.send}></ChatInput>
    </div>
  );
}

export default Channels;
