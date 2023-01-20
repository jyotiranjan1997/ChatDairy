import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import styles from "./home.module.css";

const EndPoint = "http://localhost:5000";
var socket, selectedChatCompare;


export default function SingleChat() {
    const [message, setMessege] = useState([]);


    useEffect(() => {
        socket = io(EndPoint);
    })
    
  return (
      <div>
          <div>
              {/* {message.map(({id,text,p_url}) => {
                  <div></div>
              })} */}
          </div>
      <div className={styles.message}> <input placeholder="Enter your messege" />
      <button>send</button></div>
     
    </div>
  );
}
