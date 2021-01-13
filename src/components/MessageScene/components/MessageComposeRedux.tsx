import { useDispatch } from "react-redux";
import { addMessage } from "../../../redux/reducer";
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
