import { Message } from "../../../domain/Message";
import { MessageView } from "./MessageView";

const MessageList: React.FunctionComponent = () => {
  const messages: Message[] = [
    {
      id: "das132321",
      date: 4711,
      message: "Hallo Welt",
      author: "Don Fabian",
    },
    {
      id: "das132132",
      date: 4712,
      message: "Hallo Welt",
      author: "Don Fabian",
    },
    {
      id: "da312321342s",
      date: 4713,
      message: "Hallo Welt",
      author: "Don Fabian",
    },
  ];

  return (
    <div>
      {messages.map((message) => (
        <MessageView key={message.id} message={message} />
      ))}
    </div>
  );
};

// const foobar = ({id}: Message): object => ({_id: id})
export default MessageList;
