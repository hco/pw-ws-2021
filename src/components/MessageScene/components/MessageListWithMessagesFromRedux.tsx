import { Message } from "../../../domain/Message";
import MessageList from "./MessageList";
import { useSelector } from "react-redux";
import { ApplicationState } from "./../../../redux/reducer";
import { getMessages } from "../../../redux/messages/reducer";

const MessageListWithMessagesFromRedux: React.FunctionComponent = () => {
  const messages = useSelector<ApplicationState, Message[]>(getMessages);

  // const messages = useSelector<ApplicationState, Message[]>(
  //   ({ messages }) => messages
  // );

  return <MessageList messages={messages} />;
};
export default MessageListWithMessagesFromRedux;
