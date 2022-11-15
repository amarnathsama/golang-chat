import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import "./App.css";
import { connect, sendMsg } from "./api";

const App = () => {
  const [ChatHistory, SetChatHistory] = useState([]);
  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      SetChatHistory((OldHistory) => [...OldHistory, msg]);
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <ChatHistory ChatHistory={ChatHistory} />
      {/* <ChatInput send={send} /> */}
    </div>
  );
};

export default App;
