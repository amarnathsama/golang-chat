import React, { useEffect, useState } from "react";
import "./Message.scss";

const Message = (props) => {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   setMessage(JSON.parse(props.message));
  // }, []);

  return <div className="Message">{props.message.body}</div>;
};
export default Message;
