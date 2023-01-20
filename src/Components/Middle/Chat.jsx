
import ChatComponent from "../ChatComponent/ChatComponent"

export default function Chat({handleChat}) {
  return (
    <div>
      <ChatComponent handleChat={handleChat} />
      <ChatComponent handleChat={handleChat} />
      <ChatComponent  />
      <ChatComponent />
    </div>
  );
}