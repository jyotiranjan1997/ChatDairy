import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import styles from "./home.module.css";

const EndPoint = "http://localhost:5000";
// var socket, selectedChatCompare;
var socket = io.connect(EndPoint);
export default function SingleChat() {
  const [message, setMessege] = useState([]);
  const [chat, setChat] = useState([]);
  const handleChange = (e) => {
    setMessege(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("setup", { message });
    setMessege("");
  };
  console.log(chat);
  useEffect(() => {
    socket.on("setup", (payload) => {
      console.log(payload);
      setChat([...chat, payload]);
    });
  });

  return (
    <div>
      <div>
        {chat.map((el, i) => <p key={i}>{el.message}</p>)}
      </div>
      <div className={styles.message}>
        {" "}
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter your messege"
            name="message"
            value={message}
            onChange={handleChange}
          />
          <button type="submit">send</button>{" "}
        </form>
      </div>
    </div>
  );
}
