import { useState } from "react";
import MessageCompose from "./MessageCompose";
import MessageList from "./MessageList";

const MessageScene = () => {
  const [messages, setMessages] = useState([
    {
      id: "das",
      date: 4711,
      message: "Hallo Welt",
      author: "Don Fabian",
    },
    {
      id: "da312231s",
      date: 4712,
      message: "Hallo Welt",
      author: "Don Fabian",
    },
    {
      id: "23432",
      date: 4713,
      message: "Hallo Welt",
      author: "Don Fabian",
    },
  ]);

  return (
    <div>
      <MessageList />
      <MessageCompose />
    </div>
  );
};

export default MessageScene;
