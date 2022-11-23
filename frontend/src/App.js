import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import "./App.css";
import { connect, sendMsg } from "./api";

const App = () => {
  // const sampleMsg = [
  //   { timestamp: "1Nov", data: { body: "msg1" } },
  //   { timestamp: "2Nov", data: { body: "msg5" } },
  // ];
  const [chatHistory, setChatHistory] = useState([]);
  useEffect(() => {
    connect((msgObj) => {
      const msg = JSON.parse(msgObj.data);
      console.log("New Message");
      setChatHistory((oldHistory) => [...oldHistory, msg]);
    });
  }, []);
  const send = (message) => {
    const messageObj = { message, chanelID: 1 };
    sendMsg(messageObj);
  };
  return (
    <div className="App">
      <Header />
      {/* <ChatHistory ChatHistory={chatHistory} />
      <ChatInput send={send} /> */}
    </div>
  );
};

export default App;
