import { useDispatch } from "react-redux";
import { addMessage } from "../../../redux/messages/actions";
import MessageCompose from "./MessageCompose";

const MessageComposeRedux: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  return (
    <MessageCompose
      onNewMessage={(message) => {
        dispatch(addMessage(message));
      }}
    />
  );
};

export default MessageComposeRedux;
