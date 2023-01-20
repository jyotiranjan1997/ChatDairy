import ChatComponent from "../../Components/ChatComponent/ChatComponent";
import SingleChat from "../../Components/Middle/SingleChat";
import styles from "./Chat.module.css";

export default function Chat() {
  return (
    <div>
      <div className={styles.chartPage}>
        <div>
          <input placeholder="Search your Friend" />
          <ChatComponent />
          <ChatComponent />
          <ChatComponent />

          <ChatComponent />
          <ChatComponent />
        </div>
        <div>
          <SingleChat />
        </div>
      </div>
    </div>
  );
}
