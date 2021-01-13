import { Message } from "../../../domain/Message";
import { MessageView } from "./MessageView";
import ShallowRenderer from "react-test-renderer/shallow";

interface MessageListProps {
  messages: Readonly<Message[]>;
}

const MessageList: React.FunctionComponent<MessageListProps> = (props) => {
  return (
    <div>
      {props.messages.map((message) => (
        <MessageView key={message.id} message={message} />
      ))}
    </div>
  );
};

// const foobar = ({id}: Message): object => ({_id: id})
export default MessageList;
