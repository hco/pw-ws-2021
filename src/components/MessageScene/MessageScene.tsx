import { useState } from "react";
import { Message } from "../../domain/Message";
import MessageCompose from "./components/MessageCompose";
import MessageList from "./components/MessageList";

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

  const handleNewMessage = (message: Message) => {
    // setMessages((prevMessages) => [...prevMessages, message]);

    // nur als beispiel zum verdeutlichen
    setMessages(function (currentMessagesState) {
      return [
        // neues array
        ...currentMessagesState, // als erstes kommen die aktuell im array befindlichen einträge
        message, // wir hängen die neue message am Ende dran
      ];
    });
  };

  return (
    <div>
      <MessageList messages={messages} />
      <MessageCompose onNewMessage={handleNewMessage} />
    </div>
  );
};

export default MessageScene;
