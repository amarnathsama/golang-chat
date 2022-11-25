import React, { useState } from "react";
import "./Channels.scss";
import ChatHistory from "../ChatHistory/ChatHistory";
import ChatInput from "../ChatInput/ChatInput";
import { useEffect } from "react";

function Channels(props) {
  const [currentPool, setCurrentPool] = useState(1);
  const [channels, setChannels] = useState([]);

  const handleAddChannel = () => {
    setChannels((oldChannels) => {
      const oldSize = oldChannels.length;

      return [...oldChannels, oldSize + 1];
    });
  };
  return (
    <div className="Channels">
      <span>
        <h2>Channels</h2>
        {channels.map((channels) => (
          <button
            className="button-9"
            role="button"
            onClick={() => setCurrentPool(channels)}
          >
            {`channel ${channels}`}
          </button>
        ))}
        <button className="button-9" role="button" onClick={handleAddChannel}>
          add channel
        </button>
      </span>
      <ChatHistory ChatHistory={props.ChatHistory} poolID={currentPool} />
      <ChatInput poolID={currentPool} send={props.send}></ChatInput>
    </div>
  );
}

export default Channels;
