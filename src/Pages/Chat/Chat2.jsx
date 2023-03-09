import React from "react";
import ChatList from "../../Components/ChatComponent/chatList/ChatList";
import ChatContent from "../../Components/ChatComponent/chatContent/ChatContent";
import Styles from "./Chat.module.css";

// import ChatContent from "../chatContent/ChatContent";
// import UserProfile from "../userProfile/UserProfile";

export default function Chat2() {
 

    return (
      <div className={Styles.main__chatbody}>
        <ChatList />
        <ChatContent />
        {/* <ChatContent />
        <UserProfile /> */}
      </div>
    );
  
}
