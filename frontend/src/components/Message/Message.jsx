import React, { Component, useEffect, useState } from "react";
import "./Message.scss";

const Message = (props) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(JSON.parse(props.message));
  }, []);

  return <div className="Message">{message.body}</div>;
};
export default Message;
