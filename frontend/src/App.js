import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import "./App.css";
import { connect, sendMsg } from "./api";
import Channels from "./components/Channels";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  useEffect(() => {
    connect((msgObj) => {
      const msg = JSON.parse(msgObj.data);
      console.log("New Message");
      setChatHistory((oldHistory) => [...oldHistory, msg]);
    });
  }, []);
  const send = (message) => {
    sendMsg(message);
  };
  return (
    <div className="App">
      <Header />
      <Channels ChatHistory={chatHistory} send={send} />
    </div>
  );
};

export default App;
