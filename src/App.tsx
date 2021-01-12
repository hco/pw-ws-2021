import { MessageView } from "./components/MessageView";
import { Message } from "./domain/Message";

const App = () => {
  const message: Message = {
    author: "Fabian",
    message: "hallo!",
    date: 4711,
    id: "gürzenich",
  };

  return (
    <div>
      Hello World
      <MessageView message={message} />
    </div>
  );
};

export default App;
