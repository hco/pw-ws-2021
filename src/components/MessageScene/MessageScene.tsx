import { useState } from "react";
import { Message } from "../../domain/Message";
import MessageCompose from "./components/MessageCompose";
import MessageComposeRedux from "./components/MessageComposeRedux";
import MessageList from "./components/MessageList";
import MessageListWithMessagesFromRedux from "./components/MessageListWithMessagesFromRedux";

const MessageScene = () => {
  const [messages, setMessages] = useState<Readonly<Message[]>>([]);

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
      <hr />
      <div style={{ border: "1px solid pink" }}>
        <MessageListWithMessagesFromRedux />
        <MessageComposeRedux />
      </div>
    </div>
  );
};

export default MessageScene;
