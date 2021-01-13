import { useState } from "react";
import { Message } from "../../../domain/Message";

interface MessageComposeProps {
  onNewMessage: (message: Message) => void;
}

const MessageCompose: React.FunctionComponent<MessageComposeProps> = ({
  onNewMessage,
}) => {
  const author = "Don";
  const [messageText, setMessageText] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewMessage({
      id: `${Date.now()}-${author}-${Math.random()}`, // better would be a uuid
      author,
      message: messageText,
      date: Date.now(),
    });
    setMessageText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={messageText}
        onChange={(event) => {
          setMessageText(event.target.value);
        }}
      />
      <button type="submit">Absenden</button>
    </form>
  );
};

export default MessageCompose;
